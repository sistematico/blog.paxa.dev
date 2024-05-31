---
title: 'Protegendo sua VPS com o Rocky Linux 9'
description: 'Protegendo sua VPS com o FirewallD, SELinux e Fail2Ban'
pubDate: 'May 31 2024'
heroImage: '/posts/images/rocky.png'
published: true
---

## Servidor

Primeiro vamos logar na VPS usando o usuário padrão:

```
ssh rocky@[IP_OU_HOST]
```

### SSH

Altere o arquivo de configuração do SSH /etc/ssh/sshd_config:

```
# ... resto do código

# If you want to change the port on a SELinux system, you have to tell
# SELinux about this change.
# semanage port -a -t ssh_port_t -p tcp #PORTNUMBER
#
Port 2200
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

# ... resto do código

#LoginGraceTime 2m
#PermitRootLogin prohibit-password
PermitRootLogin yes
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

# ... resto do código

# Example of overriding settings on a per-user basis
#Match User anoncvs
#       X11Forwarding no
#       AllowTcpForwarding no
#       PermitTTY no
#       ForceCommand cvs server
PasswordAuthentication yes

```

### SELinux

Altere o SELinux para refletir a nova porta:

```bash
semanage port -a -t ssh_port_t -p tcp 2200
```

### FirewallD

Instale, habilite e configure as novas regras no FirewallD:

```bash
dnf install firewalld -y
systemctl --now enable firewalld
firewall-cmd --remove-service=ssh --permanent
firewall-cmd --add-port=2200/tcp --permanent
firewall-cmd --reload
```

Reinicie o serviço do FirewallD:

```bash
systemctl restart sshd
```

## Cliente

Em breve...

## Referências

- https://www.digitalocean.com/community/tutorials/how-to-protect-ssh-with-fail2ban-on-rocky-linux-9
- https://computingforgeeks.com/change-ssh-port-centos-rhel-fedora-with-selinux/
- https://serverastra.com/docs/Tutorials/Set-Up-and-Secure-SSH-on-CentOS%2C-Rocky%2C-and-AlmaLinux-7%2C-8%2C-and-9
