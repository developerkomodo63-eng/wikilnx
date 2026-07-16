# Gestión de permisos

## Visualización de permisos

Para visualizar permisos se utilizó:

```bash
ls -l
```

Ejemplo:

```text
-rw-rw-r--
```

Interpretación:

- Usuario: lectura y escritura
- Grupo: lectura y escritura
- Otros: solo lectura

![Permisos en formato largo](/docs_jerale/img_jerale/ls%20-la.png)

## chmod

Permite modificar permisos de archivos y directorios.

Ejemplo:

```bash
chmod 600 nota.txt
```

Valor numérico:

- r = 4
- w = 2
- x = 1

Por lo tanto:

600 = rw- --- ---

![Ejemplo de chmod](/docs_jerale/img_jerale/permiso%20chmod%20600%20nota.txt.png)

## chown

Permite cambiar el propietario y grupo de un archivo.

```bash
sudo chown root:root nota.txt
```

## Permisos especiales

### Setgid

```bash
sudo chmod 2775 /srv/compartido
```

Hace que los archivos creados dentro del directorio hereden el grupo.

### Sticky Bit

```bash
sudo chmod +t /tmp
```

Impide que usuarios eliminen archivos de otros usuarios dentro de una carpeta compartida.

![chown, setgid y sticky bit aplicados](/docs_jerale/img_jerale/sudo%20chown%20root.png)