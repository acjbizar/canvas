# ![hetcanvas](https://deidee.com/logo.png?str=hetcanvas)

Templates voor kunstwebsites. Maakt dankbaar gebruik van [Twig](https://twig.symfony.com/) en [Gulp](https://gulpjs.com/).

## Bestanden

De volgende bestanden worden door het templatesysteem gegenereerd:

- `404.html`
- `ads.txt`
- `browserconfig.xml`
- `humans.txt`
- `index.html`
- `manifest.json`
- `robots.txt`
- `sitemap.xml`
- `.well-known/security.txt`

## Installeren

De installatie gaat ervan uit dat [git](https://git-scm.com/), [Node.js](https://nodejs.org/) en [npm](https://www.npmjs.com/) reeds beschikbaar zijn. In dat geval zijn slechts twee instructies nodig:

```Shell
git clone git@github.com:acjbizar/canvas.git
npm install
```

## Configureren

In het bestand `data.json` kun je alle relevante gegevens van de kunstenaar en het kunstwerk kwijt. Standaard bevat het de volgende data:

```json
{
    "artist": {
        "email": "ego@acjs.net",
            "location": "The Hague, Netherlands",
            "name": "Alexander Christiaan Jacob",
            "twitter": "ACJ",
            "url": "https://alexanderchristiaanjacob.com/"
    },
    "artwork": {
        "dir": "ltr",
            "lang": "en",
            "description": "Blank canvas.",
            "title": "Canvas",
            "themeColor": "white",
            "image": "https://deidee.com/logo.png?str=hetcanvas",
            "url": "./"
    },
    "body": "<h1>Hallo, wereld!</h1>",
        "gtm": "UA-6227584-61"
}
```

## Vullen

Door het configureren van de `data.json` wordt alle relevante metadata op de juiste plek gezet, maar dan heb je alleen nog een blanco canvas.

Het daadwerkelijke kunstwerk zal in de meeste gevallen bestaan uit opmaak (HTML), vormgeving (CSS) en acties (JavaScript). Dit kun je toevoegen in `src/index.html.twig` en wel op de volgende plekken:

```twig
{% block body %}
<h1>Hallo, canvas!</h1>
{% endblock %}
{% block script %}
"use strict";
{% endblock %}
{% block style %}
    html {
    background: {{ artwork.themeColor }};
    }
{% endblock %}
```

## Compileren

Als de `Gruntfile.js` is geconfigureerd en de `index.html.twig` gevuld kan het geheel worden gecompileerd met de volgende instructie:

```Shell
gulp templates
```

De resultaten worden weggeschreven in de map `dist`. Dit zijn de bestanden die je kunt uploaden naar de plek waar de website moet draaien.

## TODO

Bestanden die nog geen onderdeel zijn van het systeem, maar we wel willen toevoegen:

- `apple-touch-icon-precomposed.png`
- `favicon.ico`
- `sw.js` (ServiceWorker)

### Overwegen

Bestanden die toegevoegd zouden kunnen worden, maar we nog niet zeker over zijn:

- ``README.md``
- ``crossdomain.xml``
