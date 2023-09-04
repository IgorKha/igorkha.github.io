import React, { useState } from 'react';

const IPCalculator: React.FC = () => {
  const [ipWithMask, setIpWithMask] = useState('');
  const [result, setResult] = useState('');
  const [isPrivate, setIsPrivate] = useState(false); // Track if it's a private subnet

const calculate = () => {
    try {
        const [ip, mask] = parseIpWithMask(ipWithMask);
        const ipParts = ip.split('.').map(Number);
        const maskLength = mask === null ? 24 : mask === 0 ? 0 : mask;
        const subnetMaskParts = calculateSubnetMask(maskLength);
        const networkAddressParts = calculateNetworkAddress(ipParts, subnetMaskParts);
        const broadcastAddressParts = calculateBroadcastAddress(ipParts, subnetMaskParts);
        const networkAddress = networkAddressParts.join('.');
        const subnetMask = subnetMaskParts.join('.');
        const wildcardMaskParts = calculateWildcardMask(subnetMaskParts);
        const wildcardMask = wildcardMaskParts.join('.');
        const wildcardMaskDisplay = wildcardMaskParts.map((part) => part.toString()).join('.');
        const firstHost = calculateFirstHost(networkAddressParts);
        const lastHost = calculateLastHost(broadcastAddressParts, maskLength);
        const availableHosts = calculateAvailableHosts(maskLength);
        const networkClass = getNetworkClass(ipParts[0]);

        // Determine if it's a private subnet
        const isPrivateSubnet = isPrivateRange(ip);

        const formattedResult = `
Address:   ${ip}          ${ipParts.map((part) => part.toString(2).padStart(8, '0')).join('.')}
Netmask:   ${subnetMask}${maskLength < 31 ? ` = ${maskLength}` : ''}   ${subnetMaskParts.map((part) => part.toString(2).padStart(8, '0')).join('.')}
Wildcard:  ${wildcardMaskDisplay}            ${wildcardMaskParts.map((part) => part.toString(2).padStart(8, '0')).join('.')}
=>
Network:   ${networkAddress}${maskLength < 31 ? `/${maskLength}` : ''}       ${networkAddressParts.map((part) => part.toString(2).padStart(8, '0')).join('.')}
HostMin:   ${firstHost}          ${firstHost.split('.').map((part) => part.toString().padStart(8, '0')).join('.')}
HostMax:   ${lastHost}        ${lastHost.split('.').map((part) => part.toString().padStart(8, '0')).join('.')}
Broadcast: ${broadcastAddressParts.join('.')}        ${broadcastAddressParts.map((part) => part.toString(2).padStart(8, '0')).join('.')}
Hosts/Net: ${availableHosts}${maskLength < 31 ? '' : `, PtP Link RFC 3021`}${isPrivateSubnet ? ', Private Internet' : ', Public Internet'}
`;


        setResult(formattedResult);
        setIsPrivate(isPrivateSubnet);
    } catch (error) {
        setResult(`Error: ${error.message}`);
        setIsPrivate(false);
    }
};

  const parseIpWithMask = (input: string): [string, number | null] => {
    // Split the input into IP and mask parts
    const [ip, mask] = input.split('/');

    // Validate the IP format
    if (!/^\d+\.\d+\.\d+\.\d+$/.test(ip.trim())) {
      throw new Error('Invalid IP address format');
    }

    // Parse the mask (if provided) as an integer
    const parsedMask = mask ? parseInt(mask) : null;

    return [ip, parsedMask];
  };

  const calculateSubnetMask = (maskLength: number): number[] => {
    if (maskLength < 0 || maskLength > 32) {
        throw new Error('Invalid subnet mask length');
    }

    const subnetMaskParts = Array(4).fill(0);
    for (let i = 0; i < maskLength; i++) {
        subnetMaskParts[Math.floor(i / 8)] += 1 << (7 - (i % 8));
    }

    if (maskLength === 31) {
        // Set the last bit of the subnet mask to 0 for /31 mask
        subnetMaskParts[3] &= 254; // 254 = 11111110 in binary
    }

  return subnetMaskParts;
};

  const calculateNetworkAddress = (ipParts: number[], subnetMaskParts: number[]): number[] => {
    return ipParts.map((part, index) => part & subnetMaskParts[index]);
  };

  const calculateBroadcastAddress = (ipParts: number[], subnetMaskParts: number[]): number[] => {
    const invertedSubnetMaskParts = subnetMaskParts.map((part) => 255 - part);
  
    if (subnetMaskParts[3] === 254) {
      // For /31 mask, the broadcast address is the same as the network address
      return ipParts.map((part, index) => part & subnetMaskParts[index]);
    }
  
    return ipParts.map((part, index) => part | invertedSubnetMaskParts[index]);
  };

  const calculateWildcardMask = (subnetMaskParts: number[]): number[] => {
    return subnetMaskParts.map((part) => 255 - part);
  };

  const calculateFirstHost = (networkAddressParts: number[]): string => {
    const firstHostParts = [...networkAddressParts];
    firstHostParts[3] += 1;
    return firstHostParts.join('.');
  };

  const calculateLastHost = (broadcastAddressParts: number[], maskLength: number): string => {
    if (maskLength === 31) {
      return broadcastAddressParts.join('.');
    } else if (maskLength === 32) {
      return 'N/A';
    } else {
      const lastHostParts = [...broadcastAddressParts];
      lastHostParts[3] -= 1;
      return lastHostParts.join('.');
    }
  };

  const calculateAvailableHosts = (maskLength: number): number => {
    if (maskLength === 31) {
      // For /31 mask, there are only 2 possible host addresses
      return 2;
    } else if (maskLength === 32) {
      // For /32 mask, there is only 1 host address (point-to-point link)
      return 1;
    }
  
    return 2 ** (32 - maskLength) - 2;
  };
  

  const getNetworkClass = (firstOctet: number): string => {
    if (firstOctet >= 1 && firstOctet <= 126) {
      return 'A';
    } else if (firstOctet >= 128 && firstOctet <= 191) {
      return 'B';
    } else if (firstOctet >= 192 && firstOctet <= 223) {
      return 'C';
    } else if (firstOctet >= 224 && firstOctet <= 239) {
      return 'D';
    } else if (firstOctet >= 240 && firstOctet <= 255) {
      return 'E';
    } else {
      return 'Unknown';
    }
  };

  const isPrivateRange = (ip: string): boolean => {
    const [firstOctet, secondOctet] = ip.split('.').map(Number);

    if (firstOctet === 10) {
      return true; // 10.0.0.0/8
    } else if (firstOctet === 172 && secondOctet >= 16 && secondOctet <= 31) {
      return true; // 172.16.0.0/12
    } else if (firstOctet === 192 && secondOctet === 168) {
      return true; // 192.168.0.0/16
    }

    return false;
  };

  return (
    <div className="container">
      <p style={{margin: "20px 10px"}}></p>
      <h2>IP Calculator</h2>
      <div>
        <label htmlFor="ipWithMask">IP Address with Mask (e.g., 192.168.0.0/24):</label>
        <input
          type="text"
          id="ipWithMask"
          value={ipWithMask}
          onChange={(e) => setIpWithMask(e.target.value)}
        />
      </div>
      <button onClick={calculate}>Calculate</button>
      {result && <pre>{result}</pre>}
    </div>
  );
};

export default IPCalculator;
