---
slug: disable-ipv6-networking-on-linux
title: How disable IPv6 networking on Linux
authors: IgorKha
tags: [linux, network, IPv6, sysctl, grub]
---
<!--truncate-->
## sysctl

```bash
sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1
sudo sysctl -w net.ipv6.conf.default.disable_ipv6=1
sudo sysctl -w net.ipv6.conf.lo.disable_ipv6=1
sudo sysctl -p
```

or append the following lines to `/etc/sysctl.conf`

```text title="sudo nano /etc/sysctl.conf"
net.ipv6.conf.all.disable_ipv6=1
net.ipv6.conf.default.disable_ipv6=1
net.ipv6.conf.lo.disable_ipv6=1
```

and apply changes (or reboot)

```bash
sudo sysctl -p
```

## grub

Add the following param `ipv6.disable=1` to `/etc/default/grub`

```text title="sudo nano /etc/default/grub"
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash ipv6.disable=1"
GRUB_CMDLINE_LINUX="ipv6.disable=1"
```

and apply changes

```bash
sudo update-grub
```

Apply grub changes in Arch Linux

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```
