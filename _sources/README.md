![gender pay gap banner](./static/images/banner.png?)

[Klik hier om het dataverhaal te bekijken](https://efekarataz.github.io/info-vis-group7/docs/introductie.html)

# Information Visualisation Gamen of Blokken

Jupyter Book waarin het gamegedrag en de studieprestaties van studenten worden gevisualiseerd,
gebaseerd op verschillende datasets. Voor meer informatie over de bronnen en het opschonen van de data,
zie de pagina [Dataset en Voorbewerking](./docs/dataset-voorbewerking.md).

# Inhoudsopgave

- [Information Visualisation: Gamen of Blokken](#information-visualisation-gamem-of-blokken)
- [Inhoudsopgave](#inhoudsopgave)
- [Aan de slag](#aan-de-slag)
- [Structuur](#structuur)
- [Gebruik](#gebruik)
- [Publiceren](#publiceren)
- [Dataset cleaning scripts](#dataset-cleaning-scripts)
- [Auteurs](#auteurs)

# Aan de slag

```bash
git clone https://github.com/EfeKarataz/info-vis-group7.git
cd Information-Visualization-Group-7
pip3 install -r requirements.txt
```

Installeer daarnaast `conda` om een lokale omgeving op te zetten:
- [Installatie op MacOS](https://docs.conda.io/projects/conda/en/latest/user-guide/install/macos.html)
- [Installatie op Windows](https://docs.conda.io/projects/conda/en/latest/user-guide/install/windows.html)
- [Installatie op Linux](https://docs.conda.io/projects/conda/en/latest/user-guide/install/linux.html)

Als je `jupyter` niet lokaal hebt, installeer dit dan met: `pip3 install jupyter`

# Structuur

```
.
├── LICENSE             # Licentie
├── README.md           # Projectinformatie en instructies
├── _build              # Jupyter build voor deployment
├── _config.yml         # Jupyter configuratie
├── _toc.yml            # Inhoudsopgave configuratie
├── data                # Datasets
├── docs                # Te publiceren bestanden via GitHub Pages
├── notebooks           # Alle notebooks met visualisaties
├── requirements.txt    # Projectafhankelijkheden
└── static              # Afbeeldingen, css, js
```

# Gebruik

Start de notebooks met `jupyter notebook` in de hoofdmap. Alle notebooks voor het dataverhaal
staan in de `notebooks` map. Houd het overzichtelijk door per visualisatie één notebook te gebruiken.

Het hoofdverhaal staat in `./notebooks/story.ipynb`. Andere visualisaties kun je inladen met:
`%run naam_van_notebook.ipynb`. Alleen de output van de laatste cel wordt weergegeven.

# Publiceren

Gebruik de commando's `jupyter-book build .` en `ghp-import -n -p -f _build/html` om de site te publiceren via GitHub Pages.
Dit bouwt het project en voegt automatisch de juiste HTML-output toe. Eventuele inputcellen kunnen worden verborgen via metadata in story.ipynb.

# Auteurs
- Efe Karataz
- Samim Amdam
- Sharjeel Mohammad
- Zi Cheng Sunny Li

