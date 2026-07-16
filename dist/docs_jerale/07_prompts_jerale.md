# Bitácora de uso de IA

## Herramientas utilizadas

- GitHub Copilot
- ChatGPT
- Documentación oficial de Ubuntu
- Documentación oficial de nginx

## Registro de decisiones

### Decisión 1

Durante la configuración de nginx apareció un error relacionado con la ruta del sitio. Se revisó la configuración y se corrigió la carpeta raíz para apuntar a /var/www/wiki.

### Decisión 2

Durante el despliegue del sitio React se detectó que se había copiado la carpeta completa en lugar del contenido de dist. Se corrigió la copia utilizando:

```bash
sudo cp -r dist/* /var/www/wiki/
```

### Decisión 3

Se revisaron los permisos del directorio web para permitir que nginx accediera correctamente a los archivos. Se aplicó:

```bash
sudo chown -R www-data:www-data /var/www/wiki
```

## Uso de IA

Se utilizó GitHub Copilot para acelerar la escritura de componentes React y corregir pequeños errores de sintaxis CSS.

También se utilizó ChatGPT para resolver dudas puntuales sobre permisos Linux, nginx y documentación Markdown.

Las sugerencias fueron revisadas y adaptadas antes de utilizarlas.

## Reflexión final

Este laboratorio me permitió familiarizarme con la administración básica de Linux Server mediante línea de comandos. Aprendí a configurar servicios, gestionar permisos y desplegar un sitio web utilizando nginx. El apoyo de herramientas de IA fue útil para resolver dudas y acelerar tareas repetitivas, aunque fue necesario revisar cada sugerencia para comprender su funcionamiento y adaptarla a los requerimientos del laboratorio.