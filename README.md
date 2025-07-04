# EcoWatt - Optimisation de la consommation électrique

*"Économisez l'énergie aujourd'hui, préservez demain"*

## 📋 Description

EcoWatt est une application web éducative dédiée à l'optimisation de la consommation électrique. Elle propose des conseils pratiques et un quiz interactif pour aider les utilisateurs à réduire leur facture d'électricité tout en contribuant à la protection de l'environnement.

## ✨ Fonctionnalités

- **Page d'accueil informative** avec conseils d'économie d'énergie
- **Quiz interactif** de 10 questions sur l'optimisation énergétique
- **Interface responsive** adaptée à tous les appareils
- **Design moderne** avec animations et micro-interactions
- **Système de scoring** avec explications détaillées

## 🚀 Installation et lancement

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [URL_DU_REPO]
cd ecowatt

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 📖 Guide d'utilisation

### Navigation principale

#### 1. Page d'accueil
- **Accès** : Cliquez sur "Accueil" dans la navigation ou visitez la racine du site
- **Contenu** :
  - Section héro avec présentation du concept
  - Fonctionnalités principales (réduction des factures, protection environnement, bonnes pratiques)
  - Conseils rapides d'économie d'énergie
  - Appel à l'action vers le quiz

#### 2. Page Quiz
- **Accès** : Cliquez sur "Quiz" dans la navigation ou sur les boutons "Testez vos connaissances"
- **Fonctionnement** :
  - 10 questions à choix multiples
  - Barre de progression en temps réel
  - Explication immédiate après chaque réponse
  - Résultats détaillés à la fin

### Utilisation du Quiz

#### Démarrage
1. Cliquez sur "Commencer le quiz" ou "Testez vos connaissances"
2. Lisez attentivement la première question
3. Sélectionnez votre réponse parmi les 4 options

#### Pendant le quiz
- **Répondre** : Cliquez sur l'option de votre choix
- **Feedback immédiat** : 
  - ✅ Réponse correcte en vert
  - ❌ Réponse incorrecte en rouge
  - Explication détaillée affichée
- **Progression** : Cliquez sur "Question suivante" pour continuer
- **Suivi** : La barre de progression indique votre avancement

#### Résultats finaux
- **Score** : Affiché sur 10 points
- **Message personnalisé** selon votre performance :
  - 8-10 : "Excellent ! Vous êtes un expert en économie d'énergie !"
  - 6-7 : "Très bien ! Vous avez de bonnes connaissances."
  - 4-5 : "Pas mal ! Il y a encore quelques points à améliorer."
  - 0-3 : "Il est temps d'approfondir vos connaissances !"
- **Détail par question** : Révision de toutes les réponses avec explications
- **Recommencer** : Bouton pour refaire le quiz

## 🎯 Thèmes abordés dans le quiz

1. **Chauffage** - Consommation et température optimale
2. **Éclairage** - Efficacité des ampoules LED
3. **Appareils en veille** - Identification des plus consommateurs
4. **Électroménager** - Maintenance et classes énergétiques
5. **Eau chaude** - Optimisation de la température
6. **Tarification** - Utilisation des heures creuses
7. **Isolation** - Recommandations techniques
8. **Programmation** - Automatisation du chauffage

## 💡 Conseils d'utilisation

### Pour les particuliers
- Prenez le temps de lire les explications après chaque question
- Notez les conseils pratiques pour les appliquer chez vous
- Refaites le quiz après avoir mis en pratique les conseils

### Pour les éducateurs
- Utilisez l'application comme support pédagogique
- Organisez des sessions de quiz en groupe
- Exploitez les explications pour approfondir les sujets

### Pour les professionnels
- Intégrez l'outil dans vos formations sur l'efficacité énergétique
- Utilisez les statistiques pour identifier les lacunes de connaissance
- Personnalisez le contenu selon vos besoins spécifiques

## 🛠️ Technologies utilisées

- **Frontend** : React 18 avec TypeScript
- **Routing** : React Router DOM
- **Styling** : CSS3 avec variables personnalisées
- **Icons** : Lucide React
- **Build** : Vite
- **Fonts** : Google Fonts (Inter)

## 📱 Compatibilité

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablette (iPad, Android)
- ✅ Mobile (iOS Safari, Chrome Mobile)
- ✅ Design responsive adaptatif

## 🎨 Personnalisation

### Couleurs principales
- Bleu primaire : `#1e40af`
- Bleu secondaire : `#3b82f6`
- Vert succès : `#10b981`
- Jaune accent : `#fbbf24`

### Modification du contenu
- **Questions** : Éditez le fichier `src/pages/Quiz.tsx`
- **Conseils** : Modifiez `src/pages/Home.tsx`
- **Styles** : Personnalisez `src/App.css`

## 📊 Métriques et suivi

Le quiz permet de suivre :
- Taux de réussite par question
- Temps de completion
- Questions les plus difficiles
- Progression de l'apprentissage

## 🔧 Développement

### Structure du projet
```
src/
├── components/     # Composants réutilisables
│   └── Header.tsx  # Navigation principale
├── pages/          # Pages de l'application
│   ├── Home.tsx    # Page d'accueil
│   └── Quiz.tsx    # Page du quiz
├── App.tsx         # Composant racine
├── App.css         # Styles globaux
└── main.tsx        # Point d'entrée
```

### Commandes utiles
```bash
# Développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview

# Linting
npm run lint
```

## 🤝 Contribution

Pour contribuer au projet :
1. Forkez le repository
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou suggestion :
- Ouvrez une issue sur GitHub
- Contactez l'équipe de développement
- Consultez la documentation en ligne

---

**EcoWatt** - Ensemble vers une consommation électrique plus responsable ! ⚡🌱