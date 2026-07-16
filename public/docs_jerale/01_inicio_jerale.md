# Laboratorio Linux Server

## Objetivo

El objetivo de este laboratorio fue instalar y administrar un servidor Ubuntu Server mediante línea de comandos, aplicando configuraciones básicas, gestión de permisos, uso de gestores de paquetes y despliegue de un sitio web utilizando nginx.

![Máquina virtual instalada](/docs_jerale/img_jerale/Evidencia%20de%20VM%20instalada.png)

## Topología utilizada

PC anfitrión → VirtualBox → Ubuntu Server (srv-wiki)

Puertos configurados:

- SSH: 2222 → 22
- Web: 8080 → 80

Esto permitió acceder al servidor desde el equipo anfitrión y visualizar el sitio web desplegado mediante nginx.

![Configuración de reenvío de puertos VirtualBox (SSH y Web)](/docs_jerale/img_jerale/configuracion%20vb%20ssh%20y%20web.png)

## Tecnologías utilizadas

- Ubuntu Server 24.04 LTS
- VirtualBox
- GitHub
- Vercel
- nginx
- Visual Studio Code