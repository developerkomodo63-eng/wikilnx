# nginx y despliegue

## Instalación

```bash
sudo apt install nginx -y
```

![Instalación de nginx](/docs_jerale/img_jerale/instalacion%20de%20nginx.png)

Al finalizar la instalación, nginx queda activo y sirviendo la página de bienvenida por defecto:

![Página de bienvenida por defecto de nginx](/docs_jerale/img_jerale/Welcome%20to%20nginx!%20-%20sin%20react.png)

## Build del sitio React

Se clonó el repositorio del proyecto y se instalaron las dependencias:

```bash
git clone https://github.com/developerkomodo63-eng/wikilnx_schrub.git
cd wikilnx_schrub
npm install
```

![git clone del repositorio](/docs_jerale/img_jerale/git%20clone.png)

![npm install](/docs_jerale/img_jerale/npm%20install.png)

Luego se generó el build de producción:

```bash
npm run build
```

![npm run build generando la carpeta dist](/docs_jerale/img_jerale/npm%20run%20build.png)

## Configuración

![Archivo de configuración del sitio en /etc/nginx/sites-available/wiki](/docs_jerale/img_jerale/configuración%20sitio.png)

Se creó el directorio:

```bash
sudo mkdir -p /var/www/wiki
```

Posteriormente se copiaron los archivos generados por React.

```bash
sudo cp -r dist/* /var/www/wiki/
```

También se configuraron los permisos:

```bash
sudo chown -R www-data:www-data /var/www/wiki
```

## Activación del sitio

Se creó la configuración del sitio y se verificó mediante:

```bash
sudo nginx -t
```

![Prueba de configuración de nginx exitosa](/docs_jerale/img_jerale/nginx%20sucessful%20.png)

## Resultado final

El sitio quedó funcionando correctamente desde Ubuntu Server mediante nginx y fue accesible desde el navegador usando localhost:8080.

![Sitio funcionando](/docs_jerale/img_jerale/Welcome%20to%20nginx!%20-%20con%20react.png)