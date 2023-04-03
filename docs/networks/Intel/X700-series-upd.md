---
id: X700-series-PCI-e-NICs
title: X700-series PCI-e NICs
tags: [Intel, Firmware, NIC, Update, i40, Driver, nvmupdate64e]
description: Compile and update FW X710-series
---

## i40e Linux Base Driver

### Overview

This driver supports kernel versions 2.6.32 and newer. However, some features may require a newer kernel version. The associated Virtual Function (VF) driver for this driver is iavf. The associated RDMA driver for this driver is irdma.

Driver information can be obtained using ethtool, lspci, and ip. Instructions on updating ethtool can be found in the section Additional Configurations later in this document.

This driver is only supported as a loadable module at this time. Intel is not supplying patches against the kernel source to allow for static linking of the drivers.

For questions related to hardware requirements, refer to the documentation supplied with your Intel adapter. All hardware requirements listed apply to use with Linux.

This driver supports XDP (Express Data Path) on kernel 4.14 and later and AF_XDP zero-copy on kernel 4.18 and later. Note that XDP is blocked for frame sizes larger than 3KB.

:::note
1 Gb devices based on the Intel(R) Ethernet Network Connection X722 do
not support the following features:

* Data Center Bridging (DCB)
* QOS
* VMQ
* SR-IOV
* Task Encapsulation offload (VXLAN, NVGRE)
* Energy Efficient Ethernet (EEE)
* Auto-media detect
:::

### Building and Installation

Firstly need download `i40e-x.x.x.tar.gz`

[Download Intel Network Adapter Driver for PCIe](https://www.intel.com/content/www/us/en/download/18026/)

:::info
More information can be found in the README file in archive `i40e-x.x.x.tar.gz`
:::

### To manually build the driver

1. Move the base driver tar file to the directory of your choice.
   For example, use '/home/username/i40e' or '/usr/local/src/i40e'.

2. Untar/unzip the archive, where `<x.x.x>` is the version number for the
   driver tar file:

    ```bash
    tar zxf i40e-<x.x.x>.tar.gz
    ```

3. Change to the driver src directory, where `<x.x.x>` is the version number
   for the driver tar:

    ```bash
    cd i40e-<x.x.x>/src/
    ```

4. Compile the driver module:

   ```bash
   make install
   ```

   The binary will be installed as:
   `/lib/modules/<KERNEL VER>/updates/drivers/net/ethernet/intel/i40e/i40e.ko`

   The install location listed above is the default location. This may differ
   for various Linux distributions.

   NOTE: To gather and display additional statistics, use the
   I40E_ADD_PROBES pre-processor macro:

    ```bash
    make CFLAGS_EXTRA=-DI40E_ADD_PROBES
    ```

   Please note that this additional statistics gathering can impact
   performance.

   :::note
    You may see warnings from depmod related to unknown RDMA symbols
    during the make of the OOT base driver. These warnings are normal and
    appear because the in-tree RDMA driver will not work with the OOT base
    driver. To address the issue, you need to install the latest OOT versions
    of the base and RDMA drivers.
   :::

5. Load the module using the modprobe command.

   To check the version of the driver and then load it:

   ```bash
   modinfo i40e
   modprobe i40e [parameter=port1_value,port2_value]
   ```

   Alternately, make sure that any older i40e drivers are removed from the
   kernel before loading the new module:

   ```bash
   rmmod i40e; modprobe i40e
   ```

6. Assign an IP address to the interface by entering the following,
   where `<ethX>` is the interface name that was shown in dmesg after modprobe:

   ```bash
   ip address add <IP_address>/<netmask bits> dev <ethX>
   ```

7. Verify that the interface works. Enter the following, where IP_address
   is the IP address for another machine on the same subnet as the interface
   that is being tested:

   ```bash
   ping <IP_address>
   ```

:::note
For certain distributions like (but not limited to) Red Hat Enterprise
Linux 7 and Ubuntu, once the driver is installed, you may need to update the
initrd/initramfs file to prevent the OS loading old versions of the i40e driver.

```bash title="For Red Hat distributions:"
dracut --force
```

```bash title="For Ubuntu:"
update-initramfs -u
```

:::

## Firmware update

[NVM Update Package](https://www.intel.com/content/www/us/en/download/18190/)

[Intel Ethernet NVM Update Tool Quick Usage Guide for Linux (PDF)](https://www-ssl.intel.com/content/www/us/en/embedded/products/networking/nvm-update-tool-quick-linux-usage-guide.html)

### Update overview

This package contains all the required files to update the NVM on the Intel(R) Ethernet adapters in your system. It contains the NVMUpdate utility, configuration file, updated NVM binaries, and required driver files.

:::note
Note: Some Intel(R) Ethernet Converged Network Adapter X710-T4 adapters may display the message "Image differences found at offset 0x7..." when performing an update using the 700 Series NVM Update Package. This behavior is expected. Updating the Option ROM on a device with Device ID 1586 is a two step process. The first update will change the Device ID to 1589. Reboot your system and run the update tool a second time to update the Option ROM for the new Device ID.
:::

### Limitations and Prerequisites

This package is intended to be used on Intel branded adapters. Please contact your OEM vendor for an appropriate package. In some cases this package may update an OEM device. This package only updates the NVM image for the device family listed on the package. Each Intel Ethernet product family has its own NVM Update Package.

:::danger DO NOT

* Power down your system during the NVM Update.
* Remove the NIC before the NVM Update completes.
* Interrupt the NVM Update in any other way.

Doing so may make your device unusable.
:::

### Firmware Recovery Mode

When a device is in Firmware Recovery mode it will not pass traffic or allow any configuration; you can only attempt to recover the device's firmware. A device will enter Firmware Recovery mode if it detects a problem that requires the firmware to be reprogrammed.

:::note
Before starting the recovery process, make sure that your operating system, drivers, and tools have been installed properly. You must use the out-of-tree driver. Using the in-box or kernel driver may result in a "Cannot initialize port" warning.
:::

:::note
You must power cycle your system after using Recovery Mode to completely reset the firmware and hardware.
:::

### Updating Your NVM Using Interactive Mode

1. Extract the update package into a temporary folder.

2. Start the NVMUpdate utility by running the executable. For example, on an
   x64 Microsoft\*  Windows\*  system, type:

    ```text
    nvmupdatew64e
    ```

    On an x64 Linux* system, type:

    ```text
    nvmupdate64e
    ```

3. Follow the prompts to update the NVM image on the desired device.

### Using a Script

You can use a script to perform an inventory of all the Intel Ethernet devices in the system or update the Intel Ethernet devices in the system.

```bash title="Update script example:"
nvmupdate64e -u -l -o results.xml -b -c nvmupdate.cfg
```

This causes the NVMUpdate utility to check the installed Intel Ethernet devices
against those contained in nvmupdate.cfg. If a device contains an NVM version
older than that specified in the config file, the utility will update the
device's NVM. It will create an xml file containing the results of the update.
Note that -b is optional. Specifying -b will create a backup of the current NVM
image(s). This may add about 30% to the tools execution time.

```bash title="Inventory script example:"
nvmupdate64e -i -l -o inventory.xml
```

This causes the NVMUpdate utility to perform an inventory of all the Intel
Ethernet devices in the system and creates an output file (called
inventory.xml) of the results of the inventory.
