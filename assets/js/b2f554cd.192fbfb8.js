"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"arch-linux-with-u2f","metadata":{"permalink":"/blog/arch-linux-with-u2f","editUrl":"https://github.com/IgorKha/igorkha.github.io/tree/main/blog/2022-11-26-Arch-Linux-with-Yubico-U2F/index.md","source":"@site/blog/2022-11-26-Arch-Linux-with-Yubico-U2F/index.md","title":"Arch Linux with U2F","description":"Linux-u2f.png","date":"2022-11-26T00:00:00.000Z","formattedDate":"November 26, 2022","tags":[{"label":"security","permalink":"/blog/tags/security"},{"label":"key","permalink":"/blog/tags/key"},{"label":"yubico","permalink":"/blog/tags/yubico"},{"label":"solokeys","permalink":"/blog/tags/solokeys"},{"label":"U2F","permalink":"/blog/tags/u-2-f"},{"label":"FIDO2","permalink":"/blog/tags/fido-2"},{"label":"arch","permalink":"/blog/tags/arch"},{"label":"linux","permalink":"/blog/tags/linux"},{"label":"pam","permalink":"/blog/tags/pam"},{"label":"sddm","permalink":"/blog/tags/sddm"},{"label":"ssh","permalink":"/blog/tags/ssh"}],"readingTime":7.51,"hasTruncateMarker":true,"authors":[{"name":"IgorKha","url":"https://github.com/IgorKha","imageURL":"https://github.com/IgorKha.png","key":"IgorKha"}],"frontMatter":{"slug":"arch-linux-with-u2f","title":"Arch Linux with U2F","authors":"IgorKha","tags":["security","key","yubico","solokeys","U2F","FIDO2","arch","linux","pam","sddm","ssh"]},"nextItem":{"title":"Bandwidth ZeroTier on NXP LS1046","permalink":"/blog/Bandwidth-ZeroTier-on-NXP-LS1046"}},"content":"![Linux-u2f.png](./Linux-u2f.png)\\n\\nThis method will work with ANY security keys that support the U2F standard\\n\\n\x3c!--truncate--\x3e\\n\\n## Prerequisites\\n\\n* A Security key supporting the U2F Standard\\n* Linux\\n* root access to the System you are gonna configure 2FA for\\n\\n## Installation the pam-u2f\\n\\n### Arch Linux\\n\\n```bash\\nsudo pacman -Sy --needed pam-u2f\\n```\\n\\n### Debian/Ubuntu\\n\\n```bash\\nsudo apt update && sudo apt install libpam-u2f\\n```\\n\\n### Source code\\n\\n[![github](https://img.shields.io/badge/Github-Yubico/pam--u2f-black?logo=github)](https://github.com/Yubico/pam-u2f)\\n\\n![GitHub Repo stars](https://img.shields.io/github/stars/yubico/pam-u2f?color=yellow&logo=github)\\n\\n![GitHub last commit](https://img.shields.io/github/last-commit/Yubico/pam-u2f?logo=github)\\n\\n## Configure Security keys\\n\\nThe `pam-u2f` package provides a handy tool to configure Security Keys for our users called `pamu2fcfg`\\n\\n```text  title=\\"$ pamu2fcfg --help\\"\\nUsage: pamu2fcfg [OPTION]...\\nPerform a FIDO2/U2F registration operation and print a configuration line that\\ncan be used with the pam_u2f module.\\n\\n  -h, --help               Print help and exit\\n      --version            Print version and exit\\n  -o, --origin=STRING      Relying party ID to use during registration,\\n                             defaults to pam://hostname\\n  -i, --appid=STRING       Relying party name to use during registration,\\n                             defaults to the value of origin\\n  -t, --type=STRING        COSE type to use during registration (ES256, EDDSA,\\n                             or RS256), defaults to ES256\\n  -r, --resident           Generate a resident (discoverable) credential\\n  -P, --no-user-presence   Allow the credential to be used without ensuring the\\n                             user\'s presence\\n  -N, --pin-verification   Require PIN verification during authentication\\n  -V, --user-verification  Require user verification during authentication\\n  -d, --debug              Print debug information\\n  -v, --verbose            Print information about chosen origin and appid\\n  -u, --username=STRING    The name of the user registering the device,\\n                             defaults to the current user name\\n  -n, --nouser             Print only registration information (key handle,\\n                             public key, and options), useful for appending\\n\\nReport bugs at <https://github.com/Yubico/pam-u2f/issues>.\\n```\\n\\n### Individual Authorization Mapping by User\\n\\n1. Create folder:\\n\\n    ```bash\\n    mkdir -p ~/.config/Yubico\\n    ```\\n\\n2. Make user keys:\\n\\n    ```bash\\n    pamu2fcfg > ~/.config/Yubico/u2f_keys`\\n    ```\\n\\n    2.1 Add Additional keys using\\n\\n    ```bash\\n    pamu2fcfg >> ~/.config/Yubico/u2f_keys\\n    ```\\n\\n*pamu2fcfg example output:*\\n\\n ```text title=\\"/home/user/.config/Yubico/u2f_keys\\"\\n username:1pQTIDIGWLfyRhYjiFpJeSlSxN4fqdY0ucl59VxQdS0qV9QxDgb5HGL1Hd18o1gQ1wr9B3BP60tk4735JrIE7A==,KPMgCkrhND9yMKaImqwgywBVJlIHc8rDUVbMirXCG70X+bzld/a6HWOjaSlzUXinVp3yfofx96wgmSWkGX6poQ==,es256,+presence\\n ```\\n\\n### Central Authorization Mapping\\n\\nCreate a file e.g. `/etc/u2f_mappings`. The file must contain a user name, and the information obtained during the registration procedure.\\n\\n```bash\\npamu2fcfg -u username1 >> /etc/u2f_mappings\\n```\\n\\n## Activate the pam_u2f.so module in PAM\\n\\nConfigure pam-u2f as a `required` module after your primary authentication module(s) for use as a second factor. Make sure that the primary authentication method is not `sufficient` or uses other control values that may preempt execution of pam-u2f.\\n\\n### Dealing with SDDM\\n\\n1. For correctly work SDDM with U2F, need to change `system-login` to `system-local-login` into `/etc/pam.d/sddm` Failing to do this will result in the KDE lock screen, and terminal access requiring U2F, but the initial login via SDDM bypassing U2F, which defeats the purpose of having two factor authentication.\\n2. Add the following line to config file (change `username`)\\n\\n    `auth            required        pam_u2f.so authfile=/home/<username>/.config/Yubico/u2f_keys`\\n\\nsddm config **before** adding U2F:\\n\\n```text title=\\"/etc/pam.d/sddm\\"\\n#%PAM-1.0\\n\\nauth           include         system-login\\n-auth           optional        pam_gnome_keyring.so\\n-auth   optional  pam_kwallet5.so\\n\\naccount         include         system-login\\n\\npassword        include         system-login\\n-password       optional        pam_gnome_keyring.so use_authtok\\n\\nsession         optional        pam_keyinit.so force revoke\\nsession         include         system-login\\n-session                optional        pam_gnome_keyring.so auto_start\\n-session  optional  pam_kwallet5.so auto_start\\n```\\n\\nsddm config **after** adding U2F:\\n\\n```text title=\\"/etc/pam.d/sddm\\"\\n#%PAM-1.0\\n\\n// highlight-next-line\\nauth            include         system-local-login\\n-auth           optional        pam_gnome_keyring.so\\n-auth   optional  pam_kwallet5.so\\n// highlight-next-line\\nauth            required        pam_u2f.so authfile=/home/<username>/.config/Yubico/u2f_keys\\n\\naccount         include         system-login\\n\\npassword        include         system-login\\n-password       optional        pam_gnome_keyring.so use_authtok\\n\\nsession         optional        pam_keyinit.so force revoke\\nsession         include         system-login\\n-session                optional        pam_gnome_keyring.so auto_start\\n-session  optional  pam_kwallet5.so auto_start\\n```\\n\\n:::tip\\n\\nAdd the same version to the top of `/etc/pam.d/kde` to protect the KDE Plasma lock screen.\\n\\n`auth            required        pam_u2f.so authfile=/home/<username>/.config/Yubico/u2f_keys`\\n\\n:::\\n\\n:::info PAM Configuration (Reference)\\n\\n<details>\\n  <summary>PAM Configuration File Syntax</summary>\\n\\nThe entries in the configuration file are in the format:\\n\\n**`service-name module-type control-flag module-path module-options`**\\n\\n---\\n\\n**service-name** - Name of the service, for example, `ftp`, `login`, or `passwd`. An application can use different service names for the services that the application provides. For example, the Solaris secure shell daemon uses these service names: `sshd-none`, `sshd-password`, `sshd-kbdint`, `sshd-pubkey`, and `sshd-hostbased`. The service-name other is a predefined name that is used as a wildcard service-name. If a particular service-name is not found in the configuration file, the configuration for other is used.\\n\\n**module-type** - The type of service, that is, auth, account, session, or password.\\n\\n**control-flag** - Indicates the role of the module in determining the integrated success or failure value for the service. Valid control flags are binding, include, optional, required, requisite, and sufficient. See below how PAM Stacking Works for information on the use of these flags.\\n\\n**module-path** - The path to the library object that implements the service. If the pathname is not absolute, the pathname is assumed to be relative to `/usr/lib/security/$ISA/`. Use the architecture-dependent macro $ISA to cause `libpam` to look in the directory for the particular architecture of the application.\\n\\n**module-options** - Options that are passed to the service modules. A module\'s man page describes the options that are accepted by that module. Typical module options include `nowarn` and `debug`.\\n</details>\\n\\n<details>\\n  <summary>How PAM Stacking Works</summary>\\n\\nThe control flag indicates the role that a PAM module plays in determining access to the service. The control flags and their effects are:\\n\\n**Binding** \u2013 Success in meeting a binding module\'s requirements returns success immediately to the application if no previous required modules have failed. If these conditions are met, then no further execution of modules occurs. Failure causes a required failure to be recorded and the processing of modules to be continued.\\n\\n**Include** \u2013 Adds lines from a separate PAM configuration file to be used at this point in the PAM stack. This flag does not control success or failure behaviors. When a new file is read, the PAM include stack is incremented. When the stack check in the new file finishes, the include stack value is decremented. When the end of a file is reached and the PAM include stack is 0, then the stack processing ends. The maximum number for the PAM include stack is 32.\\n\\n**Optional** \u2013 Success in meeting an optional module\'s requirements is not necessary for using the service. Failure causes an optional failure to be recorded.\\n\\n**Required** \u2013 Success in meeting a required module\'s requirements is necessary for using the service. Failure results in an error return after the remaining modules for this service have been executed. Final success for the service is returned only if no binding or required modules have reported failures.\\n\\n**Requisite** \u2013 Success in meeting a requisite module\'s requirements is necessary for using the service. Failure results in an immediate error return with no further execution of modules. All requisite modules for a service must return success for the function to be able to return success to the application.\\n\\n**Sufficient** \u2013 If no previous required failures have occurred, success in a sufficient module returns success to the application immediately with no further execution of modules. Failure causes an optional failure to be recorded.\\n\\nThe following two diagrams shows how access is determined in the integration process. The first diagram indicates how success or failure is recorded for each type of control flag. The second diagram shows how the integrated value is determined.\\n\\n***Effect of Control Flags***\\n\\n![img](./pam.run_stack1.png)\\n\\n***How Integrated Value Is Determined***\\n\\n![img](./pam.run_stack2.png)\\n</details>\\n\\n:::\\n\\n### Passwordless sudo with U2F\\n\\nYou can use U2F key for Passwordless sudo i.e only the U2f key would be needed to run sudo commands\\n\\nWe can achieve this by editing the `/etc/pam.d/sudo` file\\n\\nAdd the following line to the TOP of the sudo file\\n\\n`auth            sufficient        pam_u2f.so authfile=/home/<username>/.config/Yubico/u2f_keys cue [cue_prompt=<Prompt we want to show to our users>]`\\n\\nExample:\\n\\n```text title=\\"/etc/pam.d/sudo\\"\\n#%PAM-1.0\\n// highlight-next-line\\nauth            sufficient      pam_u2f.so authfile=/home/<username>/.config/Yubico/u2f_keys cue [cue_prompt=Please Confirm Your Identity.]\\nauth            include         system-auth\\naccount         include         system-auth\\nsession         include         system-auth\\n\\n```\\n\\n## SSH Credentials\\n\\nFirst need to make sure the client has [OpenSSH 8.2](https://www.openssh.com/txt/release-8.2) or higher installed:\\n\\n```bash\\n$ ssh -V\\nOpenSSH_9.1p1, OpenSSL 3.0.7 1 Nov 2022\\n```\\n\\nTo generate a new SSH key pair, which can be either `ecdsa-sk` or `ed25519-sk` key pair. The `-sk` extension stands for **security key**. Please note that the `ed25519-sk` key pair is only supported by new YubiKeys with firmware 5.2.3 or higher that supports FIDO2. This means that YubiKeys with firmware below 5.2.3 are only compatible with ecdsa-sk key pairs. If possible, generate an `ed25519-sk` SSH key pair for [this reason](https://www.cryptsus.com/blog/how-to-secure-your-ssh-server-with-public-key-elliptic-curve-ed25519-crypto.html).\\n\\n:::tip\\n\\nYou can check the YubiKey firmware* version with the following command.\\n\\n```bash\\n$ lsusb -v 2>/dev/null | grep -A2 Yubico | grep \\"bcdDevice\\" | awk \'{print $2}\'\\n5.27\\n```\\n\\nOr we can use  [YubiKey Manager](#additional-information)\\n\\n![YubiKey Manager AppImage](yubikey-appimage.png)\\n\\n***\\\\*Yubico does not allow its firmware to be modified to minimize the physical attack surface.***\\n\\n:::\\n\\nIt is then possible to generate a credential file with:\\n\\n```bash\\nssh-keygen -t ed25519-sk -C \\"$(hostname)-Yubikey\\"\\n```\\n\\n![ssh-keygen](ssh-keygen-ed25519-sk.png)\\n\\n![ssh-keys](ssh-keys.png)\\n\\nAdd your new public key to the remote host\\n\\n```bash\\nssh-copy-id -i ~/.ssh/id_ed25519_sk.pub user@192.168.1.1\\n```\\n\\nUse:\\n\\n```bash\\nssh -i ~/.ssh/id_ed25519_sk user@192.168.1.1\\n```\\n\\n## Additional information\\n\\n:::info\\n\\n* [YubiKey Manager AppImage](https://developers.yubico.com/yubikey-manager-qt/Releases/yubikey-manager-qt-latest-linux.AppImage)\\n* [SoloKeys (open-source hardware and firmware) as an alternative to YubiKeys (closed source)](https://solokeys.com/)\\n* [pam-u2f](https://github.com/Yubico/pam-u2f)\\n* [PAM base-stack in Arch Linux](https://wiki.archlinux.org/title/PAM#PAM_base-stack)\\n* [Linux user authentication with PAM](https://wiki.archlinux.org/title/YubiKey#Linux_user_authentication_with_PAM)\\n* [More information for module arguments](https://github.com/Yubico/pam-u2f#module-arguments)\\n* [YubiKey Full Disk Encryption](https://github.com/agherzan/yubikey-full-disk-encryption)\\n* [Installing Yubico Software on Linux](https://support.yubico.com/hc/en-us/articles/360016649039-Installing-Yubico-Software-on-Linux)\\n* [Using Your U2F YubiKey with Linux](https://support.yubico.com/hc/en-us/articles/360013708900-Using-Your-U2F-YubiKey-with-Linux)\\n* [Yubico Support](https://support.yubico.com/)\\n\\n:::"},{"id":"Bandwidth-ZeroTier-on-NXP-LS1046","metadata":{"permalink":"/blog/Bandwidth-ZeroTier-on-NXP-LS1046","editUrl":"https://github.com/IgorKha/igorkha.github.io/tree/main/blog/2022-04-27-Bandwidth-ZeroTier-on-NXP-LS1046.mdx","source":"@site/blog/2022-04-27-Bandwidth-ZeroTier-on-NXP-LS1046.mdx","title":"Bandwidth ZeroTier on NXP LS1046","description":"Devices","date":"2022-04-27T00:00:00.000Z","formattedDate":"April 27, 2022","tags":[{"label":"test","permalink":"/blog/tags/test"},{"label":"zerotier","permalink":"/blog/tags/zerotier"},{"label":"nxp","permalink":"/blog/tags/nxp"}],"readingTime":2.8,"hasTruncateMarker":true,"authors":[{"name":"IgorKha","url":"https://github.com/IgorKha","imageURL":"https://github.com/IgorKha.png","key":"IgorKha"}],"frontMatter":{"slug":"Bandwidth-ZeroTier-on-NXP-LS1046","title":"Bandwidth ZeroTier on NXP LS1046","authors":"IgorKha","tags":["test","zerotier","nxp"]},"prevItem":{"title":"Arch Linux with U2F","permalink":"/blog/arch-linux-with-u2f"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\nimport CodeBlock from \'@theme/CodeBlock\';\\n\\n## Devices\\n\\n| **Device**          | **OS**           | **kernel** | **link** | **ZeroTier ver.** |\\n|:-------------------:|:----------------:|:----------:|:--------:|:-----------------:|\\n| [NXP LS1046A-RDB](https://www.nxp.com/design/qoriq-developer-resources/layerscape-ls1046a-reference-design-board:LS1046A-RDB)     | OpenWRT 21.02.02 | 5.4.179    | 10Gbps   | **1.6.6**         |\\n| [NXP LS1046A Forlinx](https://www.forlinx.net/product/ls1046a-single-board-computer-22.html) | OpenWRT 21.02.02 | 5.4.179    | 10Gbps   | **1.6.6**         |\\n\\n\x3c!--truncate--\x3e\\n\\n## ZeroTier Flow Rules\\n\\n```text title=\\"default zt flow rules\\"\\ndrop\\n    not ethertype ipv4\\n    and not ethertype arp\\n    and not ethertype ipv6\\n;\\naccept;\\n```\\n\\n## Result\\n\\n<Tabs>\\n  <TabItem value=\\"parallel-1\\" label=\\"iperf 1 thread\\" default>\\n    <CodeBlock language=\\"text\\" title=\\"iperf -c 172.22.36.168 -t 30\\">\\n      {`------------------------------------------------------------\\nClient connecting to 172.22.36.168, TCP port 5001\\nTCP window size:  238 KByte (default)\\n------------------------------------------------------------\\n[  3] local 172.22.117.147 port 38266 connected with 172.22.36.168 port 5001\\n[ ID] Interval       Transfer     Bandwidth\\n[  3]  0.0-30.0 sec  1.47 GBytes   421 Mbits/sec`}\\n    </CodeBlock>\\n  </TabItem>\\n  <TabItem value=\\"parallel-20\\" label=\\"iperf 20 threads\\">\\n    <CodeBlock language=\\"text\\" title=\\"iperf -c 172.22.36.168 -P 20 -t 60\\">\\n      {`------------------------------------------------------------\\nClient connecting to 172.22.36.168, TCP port 5001\\nTCP window size: 2.45 MByte (default)\\n------------------------------------------------------------\\n[ 19] local 172.22.117.147 port 44320 connected with 172.22.36.168 port 5001\\n[  3] local 172.22.117.147 port 44288 connected with 172.22.36.168 port 5001\\n[  5] local 172.22.117.147 port 44292 connected with 172.22.36.168 port 5001\\n[ 10] local 172.22.117.147 port 44302 connected with 172.22.36.168 port 5001\\n[  4] local 172.22.117.147 port 44290 connected with 172.22.36.168 port 5001\\n[  6] local 172.22.117.147 port 44294 connected with 172.22.36.168 port 5001\\n[  9] local 172.22.117.147 port 44300 connected with 172.22.36.168 port 5001\\n[ 17] local 172.22.117.147 port 44316 connected with 172.22.36.168 port 5001\\n[ 13] local 172.22.117.147 port 44308 connected with 172.22.36.168 port 5001\\n[  8] local 172.22.117.147 port 44298 connected with 172.22.36.168 port 5001\\n[ 18] local 172.22.117.147 port 44318 connected with 172.22.36.168 port 5001\\n[ 14] local 172.22.117.147 port 44310 connected with 172.22.36.168 port 5001\\n[ 21] local 172.22.117.147 port 44324 connected with 172.22.36.168 port 5001\\n[  7] local 172.22.117.147 port 44296 connected with 172.22.36.168 port 5001\\n[ 20] local 172.22.117.147 port 44322 connected with 172.22.36.168 port 5001\\n[ 12] local 172.22.117.147 port 44306 connected with 172.22.36.168 port 5001\\n[ 11] local 172.22.117.147 port 44304 connected with 172.22.36.168 port 5001\\n[ 16] local 172.22.117.147 port 44314 connected with 172.22.36.168 port 5001\\n[ 22] local 172.22.117.147 port 44326 connected with 172.22.36.168 port 5001\\n[ 15] local 172.22.117.147 port 44312 connected with 172.22.36.168 port 5001\\n[ ID] Interval       Transfer     Bandwidth\\n[  4]  0.0-60.0 sec   153 MBytes  21.3 Mbits/sec\\n[  8]  0.0-60.0 sec   165 MBytes  23.1 Mbits/sec\\n[ 18]  0.0-60.0 sec   164 MBytes  23.0 Mbits/sec\\n[  7]  0.0-60.0 sec   167 MBytes  23.3 Mbits/sec\\n[ 11]  0.0-60.0 sec   180 MBytes  25.2 Mbits/sec\\n[ 19]  0.0-60.1 sec   135 MBytes  18.8 Mbits/sec\\n[ 20]  0.0-60.1 sec   148 MBytes  20.6 Mbits/sec\\n[ 15]  0.0-60.1 sec   207 MBytes  28.9 Mbits/sec\\n[ 22]  0.0-60.2 sec   204 MBytes  28.5 Mbits/sec\\n[ 17]  0.0-60.2 sec   145 MBytes  20.2 Mbits/sec\\n[  5]  0.0-60.3 sec   141 MBytes  19.6 Mbits/sec\\n[ 14]  0.0-60.3 sec   148 MBytes  20.7 Mbits/sec\\n[ 12]  0.0-60.3 sec   174 MBytes  24.2 Mbits/sec\\n[ 16]  0.0-60.3 sec   145 MBytes  20.2 Mbits/sec\\n[ 21]  0.0-60.3 sec   160 MBytes  22.3 Mbits/sec\\n[ 10]  0.0-60.4 sec   195 MBytes  27.1 Mbits/sec\\n[  6]  0.0-60.4 sec   192 MBytes  26.6 Mbits/sec\\n[  9]  0.0-60.7 sec   104 MBytes  14.3 Mbits/sec\\n[ 13]  0.0-60.9 sec   149 MBytes  20.6 Mbits/sec\\n[  3]  0.0-61.0 sec   142 MBytes  19.6 Mbits/sec\\n[SUM]  0.0-61.0 sec  3.14 GBytes   443 Mbits/sec`}\\n    </CodeBlock>\\n  </TabItem>\\n</Tabs>"}]}')}}]);