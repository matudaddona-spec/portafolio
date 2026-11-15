# Portafolio · Martín D'Addona

Mi portafolio personal: proyectos, servicios, formación y contacto.

**Web publicada:** https://portafolio-martin-daddona.pages.dev

Hecho con HTML, CSS y JavaScript, sin frameworks. Está publicado en Cloudflare Pages.

## Cómo actualizarlo

| Qué cambiar | Dónde |
| --- | --- |
| Textos, proyectos y links | `index.html` |
| Colores, tipografías y diseño | `styles.css` (las variables están al principio) |
| Menú en el celular y animaciones | `script.js` |
| Capturas de los proyectos | `assets/img/` |
| CV y certificados | `assets/` |

Cada vez que subís cambios a la rama `main`, Cloudflare publica la web sola en 1 o 2 minutos:

```bash
git add -A
git commit -m "qué cambié"
git push
```

## Verlo en tu compu

```bash
python -m http.server 5500
```

Después abrí http://localhost:5500
