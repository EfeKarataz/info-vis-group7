## Dataset en Voorbewerking

### Datasets en beschrijvingen

Om de onderzoeksvraag te beantwoorden, zijn drie datasets geanalyseerd. Deze bevatten informatie over studenten, hun gamegedrag, studiegedrag en prestaties. Denk aan speeltijd, voorbereiding op examens en cijfers. Dankzij deze variatie kunnen we het onderwerp vanuit verschillende invalshoeken bekijken. De drie datasets volgen hieronder.

1. *Student Performance Factors*

- *Bron*: https://www.kaggle.com/datasets/lainguyn123/student-performance-factors/data
- *Beschrijving*: Deze dataset heeft 6607 observaties en 20 variabelen. Deze dataset geeft een uitgebreid beeld van verschillende factoren die de
schoolprestaties van studenten beïnvloeden. De dataset bevat informatie over studiegedrag, aanwezigheid op school, betrokkenheid van ouders en andere elementen die van invloed kunnen zijn op academisch succes. De belangrijkste variabelen in deze dataset zijn toegang tot internet, buitenschoolse activiteiten en examen score.  

2. *Student Performance Metrics Dataset*
- *Bron*: https://data.mendeley.com/datasets/5b82ytz489/1
- *Beschrijving*: Deze dataset heeft 493 observaties en 16 variabelen. Het bevat uitgebreide informatie over academische en niet-academische
kenmerken van studenten in het hoger onderwijs. De dataset bevat onder andere de variabelen Gaming, Attendance en Preparation in ordinale categorieën zoals "0-1 Hour" en "More than 3 Hours". Dit stelt ons in staat om verschillen in studiegedrag tussen studenten inzichtelijk te maken.

3. *Games and Success in Students*
- *Bron*: https://www.kaggle.com/datasets/deadier/play-games-and-success-in-students
- *Beschrijving*: Deze dataset bestaat uit 770 observaties en 10 variabelen met variabelen als Playing Hours (aantal uren gamen per dag), Playing Years (hoeveel jaar iemand al games speelt) en Playing Often (hoevaak iemand games speelt op een schaal van 0-5). Beide zijn beschikbaar en daarmee geschikt voor correlatieanalyse. Het doel van de dataset is om factoren te
identificeren die een positieve of negatieve invloed hebben op academisch succes.

### Datakwaliteit

We hebben alle datasets zorgvuldig gecontroleerd op de vijf kernaspecten van datakwaliteit:
- Nauwkeurigheid: Alle waarden in bijvoorbeeld Playing Hours en Playing Years vallen binnen logische grenzen (respectievelijk 0–5 uur en 0–4 jaar).
- Validiteit: Categorische kolommen zoals Gaming, Preparation en Attendance bevatten alleen verwachte waarden zoals "0-1 Hour" of "80%-100%".
- Volledigheid: Er zijn geen missende waarden in de kolommen die er gebruikt worden.
- Consistentie: De categorieën zijn gestandaardiseerd en waar nodig omgezet naar ordinale getallen om statistische verwerking mogelijk te maken.
- Uniqueness: Er zijn geen dubbele records binnen de gebruikte subsets.

### Data voorberwerking
De drie datasets zijn ingeladen in Python met behulp van pandas. CSV-bestanden zijn geopend met pd.read_csv() en werden direct ingelezen in DataFrames. Daarnaast zijn categorische variabelen omgezet naar numerieke schalen om statistische analyses mogelijk te maken, zoals het berekenen van gemiddelden en correlaties. Deze werden verwerkt met de visualisatietool plotly.
