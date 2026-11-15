# Portafolio · Martín D'Addona

Mi portafolio personal: proyectos, servicios, formación y contacto.

**Web publicada:** https://portafolio-martin-daddona.pages.dev

Hecho con HTML, SASS y JavaScript, sin frameworks. Está publicado en Cloudflare Pages.

## Cómo actualizarlo

| Qué cambiar | Dónde |
| --- | --- |
| Textos, proyectos y links | `index.html` |
| Colores, tipografías y diseño | `SCSS/` (las variables están en `SCSS/_variables.scss`) |
| Menú en el celular y animaciones | `script.js` |
| Capturas de los proyectos | `assets/img/` |
| CV y certificados | `assets/` |

Cada vez que subís cambios a la rama `main`, Cloudflare publica la web sola en 1 o 2 minutos:

```bash
git add -A
git commit -m "qué cambié"
git push
```

## Estilos con SASS

Los estilos se escriben en la carpeta `SCSS/`, dividida en partials (`_nav.scss`, `_hero.scss`, `_proyectos.scss`, etc.) que junta `SCSS/style.scss`. Ahí también están las variables, los mixins y los placeholders (`_extends.scss`).

La página usa el archivo compilado `styles.css`, así que después de tocar algo en `SCSS/` hay que compilar:

```bash
npx sass --no-source-map SCSS/style.scss styles.css
```

Para que se compile solo cada vez que guardás, agregá `--watch` al final. No edites `styles.css` a mano: se pisa al compilar.

## Verlo en tu compu

```bash
python -m http.server 5500
```

Después abrí http://localhost:5500
