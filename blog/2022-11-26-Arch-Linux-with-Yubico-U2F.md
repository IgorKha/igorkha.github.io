---
slug: Arch-Linux-with-Yubico-U2F
title: Arch Linux with Yubico U2F
authors: IgorKha
tags: [security, key, yubico, U2F, FIDO2, arch, linux, pam, sddm, ssh]
---

## Prerequisites

This method will work with ANY security keys that support the U2F standard

* A Security key supporting the U2F Standard
* Linux
* root access to the System you are gonna configure 2FA for

<!--truncate-->
## Installation the pam-u2f

### Arch Linux

`sudo pacman -Sy --needed pam-u2f`

### Debian/Ubuntu

`sudo apt update && sudo apt install libpam-u2f`

### Source code

[Github](https://github.com/Yubico/pam-u2f)

## Configure Security keys

The `pam-u2f` package provides a handy tool to configure Security Keys for our users called `pamu2fcfg`

### Individual Authorization Mapping by User

1. Create folder:

    `mkdir -p ~/.config/Yubico`

2. Make user keys:

    `pamu2fcfg > ~/.config/Yubico/u2f_keys`

    2.1 Add Additional keys using

    `pamu2fcfg >> ~/.config/Yubico/u2f_keys`

_pamu2fcfg example output:_

 ```text title="~/.config/Yubico/u2f_keys"
 username:1pQTIDIGWLfyRhYjiFpJeSlSxN4fqdY0ucl59VxQdS0qV9QxDgb5HGL1Hd18o1gQ1wr9B3BP60tk4735JrIE7A==,KPMgCkrhND9yMKaImqwgywBVJlIHc8rDUVbMirXCG70X+bzld/a6HWOjaSlzUXinVp3yfofx96wgmSWkGX6poQ==,es256,+presence
 ```

### Central Authorization Mapping

Create a file e.g. `/etc/u2f_mappings`. The file must contain a user name, and the information obtained during the registration procedure.

`pamu2fcfg -u username1 >> /etc/u2f_mappings`

## Activate the pam_u2f.so module in PAM

Configure pam-u2f as a `required` module after your primary authentication module(s) for use as a second factor. Make sure that the primary authentication method is not `sufficient` or uses other control values that may preempt execution of pam-u2f.

### Dealing with SDDM

1. For correctly work SDDM with U2F, need to change `system-login` to `system-local-login` into `/etc/pam.d/sddm` Failing to do this will result in the KDE lock screen, and terminal access requiring U2F, but the initial login via SDDM bypassing U2F, which defeats the purpose of having two factor authentication.
2. Add the following line to config file (change `username`)

    `auth            required        pam_u2f.so authfile=/home/<username>/.config/Yubico/u2f_keys`

sddm config **before** adding U2F:

```text title="/etc/pam.d/sddm"
#%PAM-1.0

auth           include         system-login
-auth           optional        pam_gnome_keyring.so
-auth   optional  pam_kwallet5.so

account         include         system-login

password        include         system-login
-password       optional        pam_gnome_keyring.so use_authtok

session         optional        pam_keyinit.so force revoke
session         include         system-login
-session                optional        pam_gnome_keyring.so auto_start
-session  optional  pam_kwallet5.so auto_start
```

sddm config **after** adding U2F:

```text title="/etc/pam.d/sddm"
#%PAM-1.0

// highlight-next-line
auth            include         system-local-login
-auth           optional        pam_gnome_keyring.so
-auth   optional  pam_kwallet5.so
// highlight-next-line
auth            required        pam_u2f.so authfile=/home/<username>/.config/Yubico/u2f_keys

account         include         system-login

password        include         system-login
-password       optional        pam_gnome_keyring.so use_authtok

session         optional        pam_keyinit.so force revoke
session         include         system-login
-session                optional        pam_gnome_keyring.so auto_start
-session  optional  pam_kwallet5.so auto_start
```

### Passwordless sudo with U2F

You can use U2F key for Passwordless sudo i.e only the U2f key would be needed to run sudo commands

We can achieve this by editing the `/etc/pam.d/sudo` file

Add the following line to the TOP of the sudo file

`auth            sufficient        pam_u2f.so authfile=/home/<username>/.config/Yubico/u2f_keys cue [cue_prompt=<Prompt we want to show to our users>]`

Example:

```text title="/etc/pam.d/sudo"
#%PAM-1.0
// highlight-next-line
auth            sufficient        pam_u2f.so authfile=/home/<username>/.config/Yubico/u2f_keys cue [cue_prompt=Please Confirm Your Identity.]
auth            include         system-auth
account         include         system-auth
session         include         system-auth

```

## SSH Credentials

To generate SSH credentials OpenSSH version 8.2 or later is required. It is then possible to generate a credential file with:

`ssh-keygen -t ecdsa-sk -f ./.ssh/filename`

or

`ssh-keygen -t ed25519-sk -f ./.ssh/filename`

## Additional information

:::info

* [YubiKey Manager AppImage](https://developers.yubico.com/yubikey-manager-qt/Releases/yubikey-manager-qt-latest-linux.AppImage)
* [pam-u2f](https://github.com/Yubico/pam-u2f)
* [PAM base-stack in Arch Linux](https://wiki.archlinux.org/title/PAM#PAM_base-stack)
* [Linux user authentication with PAM](https://wiki.archlinux.org/title/YubiKey#Linux_user_authentication_with_PAM)
* [More information for module arguments](https://github.com/Yubico/pam-u2f#module-arguments)
* [YubiKey Full Disk Encryption](https://github.com/agherzan/yubikey-full-disk-encryption)
* [Installing Yubico Software on Linux](https://support.yubico.com/hc/en-us/articles/360016649039-Installing-Yubico-Software-on-Linux)
* [Using Your U2F YubiKey with Linux](https://support.yubico.com/hc/en-us/articles/360013708900-Using-Your-U2F-YubiKey-with-Linux)
* [Yubico Support](https://support.yubico.com/)

:::
