# Gestores de paquetes

Ubuntu utiliza APT para administrar software.

## Flujo de trabajo

### Buscar

```bash
apt search htop
```

### Mostrar información

```bash
apt show htop
```

### Instalar

```bash
sudo apt install htop
```

![APT search, show e install](/docs_jerale/img_jerale/05_paquetes%20%28apt%20search%20show%20install%29.png)

## Análisis de factibilidad

Necesidad: monitorear recursos del sistema.

Alternativas:

- htop
- top
- btop

Elegí htop porque es liviano, fácil de usar y está disponible directamente en los repositorios oficiales de Ubuntu, por lo que no requiere configuraciones adicionales ni dependencias complejas.

![Interfaz de htop](/docs_jerale/img_jerale/htop.png)