# gta-ynov-vue
https://antoinegosset.github.io/#/

login: antoine.gosset@ynov.com
password: 123

login manager: manager@ynov.com
password: 1234

## Objectif du 23/11 :
 - Calculer le taux horaire semaine et alerter lorsque l'heure indiquée sur le conrtat est pas respectée
 - Ajouter une deuxième utilisateur
 - Gérer le responsive
 
 Bilan: Les 3 points sont complétés j'ai pu ajouter une page pour le manager
 
## Objectif du 22/11 :
 - Afficher les crénaux par jour et les congés
 - Modifier des valeurs dans les données de l'utilisateur (planning ou informations personnelles)
 
 Bilan: Les données du planning et de la fiche personnelle peuvent être mdofier et enregistrer en localstorage
 Pb : Il faut parfois faire 2 fois le login avant que cela fonctionne, si l'on rafraichi la page on est déconnecté
 
## Objectif du jour 16/11 :
 - Récuperer les données json dans une de mes Vue
 - Login avec un utilisateur
 
 Bilan : Le système de login fonctionne avec un utilisateur, un problème est rencontré lors du rafraichissement de la page l'utilisateur est déconnecté.
 La page de formulaire de l'utilisateur récupere ses données, il faudra maintenant qu'il puisse les modifier.
 J'ai commencé à récuperer les données planning de l'utilisateur (sans succès)
 
## Objetcif du jour 15/11 :

 - Créer un format de donner json
 - Récupérer les données json dans une Vue

Bilan : J'ai créé un format de donner qui correpsond à mes attentes dans un fichier JSON, j'ai récuperé un DataManager d'un autre repo pour comprendre son fonctionnement et l'adapter pour mon utilisation. Cette partie est complexe pour moi, n'étant pas habitué au developpement web, chaque étapes est une découverte. 

## Objetcif du jour 09/11 :

 - Créer les premières vue et components
 - Avoir une première interface graphique

Bilan : J'ai réalisé la page pour afficher les informations de l'utilisateur et commencé la page planning

## Objectif du jour 08/11 :
 - Comprendre le sujet
 - installer l'environement 
 - deployer le build 
 
 Bilan : J'ai pu atteindre mes objectifs et ajouter une navbar dans mon projet

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
