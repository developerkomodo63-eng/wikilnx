# Instalación y configuración básica

## Hostname

Se configuró el nombre del servidor utilizando:

```bash
sudo hostnamectl set-hostname srv-wiki
```

![Configuración del hostname (login mostrando srv-wiki)](/docs_jerale/img_jerale/inicio%20de%20sesion.png)

## Dirección IP

Se verificó la dirección IP utilizando:

```bash
ip a
```

![hostnamectl y salida de ip a](/docs_jerale/img_jerale/hostname%20e%20ip.png)

## Actualización del sistema

Se actualizaron los repositorios y paquetes:

```bash
sudo apt update
sudo apt upgrade -y
```

![Actualización del sistema](/docs_jerale/img_jerale/sudo%20update.png)

## Instalación de SSH

Se instaló el servicio de SSH para permitir el acceso remoto:

```bash
sudo apt install -y openssh-server
```

![Instalación de openssh-server](/docs_jerale/img_jerale/sudo%20apt%20install%20ssh.png)

## Firewall UFW

Se habilitaron las reglas necesarias para SSH y HTTP:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw enable
```

![Reglas UFW habilitadas](/docs_jerale/img_jerale/ufw%20allow.png)

Posteriormente se verificó la configuración:

```bash
sudo ufw status verbose
```

![Firewall UFW](/docs_jerale/img_jerale/03_instalacion%20%28ufw%20status%20verbose%29.png)

Con el firewall habilitado se validó el acceso remoto por SSH desde el equipo anfitrión (Windows) mediante el puerto reenviado 2222:

![Conexión SSH desde CMD de Windows](/docs_jerale/img_jerale/conexion%20de%20linux%20a%20cmd%20windows.png)

## Investigación

### ¿Qué es NAT?

NAT permite que una máquina virtual tenga acceso a internet utilizando la conexión del equipo anfitrión.

### ¿Para qué sirve el reenvío de puertos?

Permite acceder desde el computador anfitrión a servicios que se ejecutan dentro de la máquina virtual.

### DHCP vs IP fija

DHCP asigna direcciones IP automáticamente. Una IP fija mantiene siempre la misma dirección configurada manualmente.