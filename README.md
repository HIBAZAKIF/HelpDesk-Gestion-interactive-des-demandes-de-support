# 🎫 HelpDesk — Gestion des demandes de support informatique

## 📌 Description du projet

HelpDesk est une application web interactive et responsive développée individuellement dans le cadre de la formation Développeur Web et Web Mobile à YouCode.

Le projet s'inscrit dans le contexte d'Atlas Solutions, une entreprise fictive de services numériques qui souhaite centraliser les incidents informatiques signalés par ses collaborateurs.

L'application permet aux utilisateurs de consulter, ajouter et supprimer des demandes de support informatique à travers une interface simple, intuitive et accessible.

Chaque demande contient un titre, une description, une catégorie et une priorité afin de faciliter l'identification des problèmes signalés.

Ce projet met principalement l'accent sur :

- L'intégration HTML5 et CSS3.
- Le Responsive Design.
- La manipulation du DOM avec JavaScript Vanilla.
- La gestion des événements et des formulaires.
- La validation des données utilisateur.
- L'affichage dynamique des demandes.
- La gestion des versions avec Git et GitHub.
- L'organisation des tâches avec Jira.
- La conception de l'interface à partir de la maquette Figma.

## 🎯 Objectifs du projet

- Créer une application web interactive et responsive.
- Utiliser une structure HTML5 sémantique.
- Développer une interface adaptée aux écrans mobiles, tablettes et ordinateurs.
- Appliquer les principes d'accessibilité Web.
- Utiliser CSS Flexbox, CSS Grid et les Media Queries.
- Manipuler les tableaux et les objets en JavaScript.
- Dynamiser l'interface avec la manipulation du DOM.
- Gérer les événements avec `addEventListener()`.
- Valider les données d'un formulaire.
- Ajouter et supprimer des demandes sans rechargement de la page.
- Actualiser automatiquement le compteur des demandes.
- Utiliser Git et GitHub pour versionner le projet.
- Organiser les tâches et suivre leur avancement avec Jira.

## 👨‍💻 Réalisation du projet

Le projet est réalisé individuellement. Je suis responsable de l'ensemble des étapes de développement, depuis l'analyse du besoin jusqu'aux tests et à la livraison finale.

| Responsabilité | Description |
|---|---|
| Analyse | Compréhension du besoin et identification des fonctionnalités |
| Conception | Organisation de l'interface et préparation du zoning |
| Intégration Front-End | Développement de la structure HTML et des styles CSS |
| Développement JavaScript | Gestion des demandes et interactions utilisateur |
| Tests | Vérification des fonctionnalités et du responsive design |
| Versionnement | Gestion du code avec Git et GitHub |
| Gestion de projet | Organisation des tâches avec Jira |
| Documentation | Rédaction du fichier README.md |

## 🛠️ Technologies utilisées

### HTML5

Utilisé pour structurer l'interface de l'application avec des balises sémantiques :

- `header` : en-tête de l'application.
- `main` : contenu principal.
- `section` : organisation des différentes parties de l'interface.
- `form` : formulaire de création d'une demande.
- `label` : association des libellés aux champs du formulaire.
- `input` et `textarea` : saisie des informations.
- `select` : sélection de la catégorie et de la priorité.
- `button` : actions d'ajout et de suppression.

### CSS3

Utilisé pour la mise en forme et le Responsive Design :

- Flexbox.
- CSS Grid.
- Variables CSS.
- Media Queries.
- Mise en page responsive.
- Styles des formulaires et des boutons.
- Identification visuelle des priorités.

### JavaScript Vanilla

Utilisé pour rendre l'application interactive sans utiliser de framework :

- Déclaration de variables et de fonctions.
- Manipulation des tableaux et des objets.
- Sélection des éléments avec `querySelector()` et `getElementById()`.
- Gestion des événements avec `addEventListener()`.
- Interception de la soumission du formulaire avec `preventDefault()`.
- Validation des champs obligatoires.
- Création et suppression des éléments HTML.
- Mise à jour dynamique de la liste des demandes.
- Actualisation du compteur.
- Affichage des messages d'erreur et de confirmation.

### Figma

Utilisé comme référence pour :

- La consultation de la maquette de l'interface.
- L'organisation des éléments visuels.
- La préparation de la mise en page.
- L'adaptation de l'interface aux différents écrans, selon la maquette disponible.

### Git & GitHub

Utilisés pour :

- Le versionnement du code source.
- Le suivi des modifications.
- La création de commits significatifs.
- L'hébergement du dépôt du projet.
- La conservation d'un historique des modifications.

### Jira

Utilisé pour organiser le travail individuel :

- Création des User Stories.
- Décomposition des fonctionnalités en tâches techniques.
- Suivi de l'avancement du développement.
- Vérification des critères d'acceptation.

## 📁 Structure du projet

```text
HelpDesk/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── images/
│   └── icons/
│
├── screenshots/
│   ├── accueil.png
│   └── demandes.png
│
└── README.md
```

### Description des dossiers et fichiers

- `index.html` : structure principale de l'application.
- `css/` : contient les fichiers CSS.
- `css/style.css` : styles de l'interface et règles responsive.
- `js/` : contient le code JavaScript.
- `js/script.js` : gestion des données, du formulaire, des événements, de l'affichage et des suppressions.
- `assets/images/` : images éventuellement utilisées dans l'interface.
- `assets/icons/` : icônes éventuellement utilisées.
- `screenshots/` : captures d'écran de l'application.
- `README.md` : documentation du projet.

*Remarque : cette structure est un exemple. Elle doit être adaptée aux fichiers réellement présents dans le dépôt.*

## ⚙️ Fonctionnalités de l'application

### 1. Affichage des demandes

- Afficher les demandes à partir d'un tableau JavaScript.
- Initialiser le tableau avec au moins trois demandes fictives.
- Présenter les informations sous forme de cartes ou de liste.
- Afficher le titre, la catégorie et la priorité de chaque demande.
- Afficher un message adapté lorsque la liste est vide.

### 2. Ajout d'une demande

Un formulaire permet de saisir les informations suivantes :

- Titre du problème.
- Description du problème.
- Catégorie : Matériel, Logiciel ou Réseau.
- Priorité : Basse, Normale ou Haute.

Lors de la soumission :

- Vérifier que tous les champs obligatoires sont remplis.
- Refuser les champs contenant uniquement des espaces.
- Afficher un message d'erreur si les données sont invalides.
- Ajouter la demande au tableau JavaScript si les données sont valides.
- Actualiser l'affichage sans recharger la page.
- Afficher un message de confirmation.
- Réinitialiser le formulaire.

### 3. Suppression d'une demande

- Ajouter un bouton « Supprimer » à chaque demande.
- Demander une confirmation avant la suppression.
- Permettre à l'utilisateur d'annuler l'action.
- Supprimer uniquement la demande sélectionnée.
- Actualiser immédiatement la liste après la suppression.

### 4. Compteur dynamique

- Afficher le nombre total de demandes.
- Mettre à jour le compteur après chaque ajout.
- Mettre à jour le compteur après chaque suppression.
- Afficher le nombre exact de demandes présentes dans le tableau.

### 5. Fonctionnalités bonus

Selon l'avancement du projet, les fonctionnalités suivantes peuvent être ajoutées :

- Recherche par titre.
- Filtrage par catégorie.
- Filtrage par priorité.
- Basculement entre une vue en cartes et une vue en tableau.
- Sauvegarde des demandes avec `localStorage`.

Les fonctionnalités bonus restent facultatives.

## 🌿 Workflow Git et GitHub

Le projet étant individuel, Git est utilisé pour gérer les versions du code et suivre les étapes de développement.

### Branches principales

| Branche | Utilisation |
|---|---|
| `main` | Version stable du projet |
| `develop` | Développement et intégration, si cette branche est utilisée |
| `feature/*` | Développement d'une fonctionnalité |
| `hotfix/*` | Correction d'un problème urgent |

Pour un projet individuel, l'utilisation des branches `develop`, `feature/*` et `hotfix/*` reste facultative. Le workflow peut être simplifié en utilisant directement `main` et des commits réguliers.

### Étapes du versionnement

1. Créer le dépôt GitHub.
2. Initialiser Git dans le dossier du projet.
3. Créer la structure HTML, CSS et JavaScript.
4. Développer les fonctionnalités progressivement.
5. Effectuer des commits significatifs.
6. Envoyer les modifications vers GitHub.
7. Vérifier la version finale du projet.

### Exemples de commandes Git

```bash
git init
git add .
git commit -m "Initialise la structure du projet"
git add .
git commit -m "Developpe l'interface HTML et CSS"
git add .
git commit -m "Implemente les fonctionnalites JavaScript"
git add .
git commit -m "Finalise la documentation README"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/HelpDesk.git
git push -u origin main
```

Remplacez l'URL par celle de votre dépôt GitHub. Si le dépôt distant est déjà configuré, ne répétez pas la commande `git remote add origin`.

## 📊 Gestion de projet avec Jira

Le projet est organisé avec Jira afin de planifier les fonctionnalités et de suivre l'avancement du travail individuel.

Les tâches sont réparties en User Stories et en tâches techniques.

### User Stories

| ID | User Story | Objectif |
|---|---|---|
| US-01 | Consulter les demandes | Afficher dynamiquement les demandes existantes |
| US-02 | Créer une demande | Ajouter une demande après validation du formulaire |
| US-03 | Supprimer une demande | Supprimer une demande après confirmation |
| US-04 | Suivre les demandes | Afficher et actualiser le compteur |

### Organisation du tableau Kanban

Le tableau peut contenir les colonnes suivantes :

- **To Do :** tâches à réaliser.
- **In Progress :** tâches en cours de développement.
- **In Review :** fonctionnalités en cours de vérification.
- **Done :** tâches terminées et testées.

Chaque tâche est suivie individuellement jusqu'à sa validation.

## 🚀 Installation et lancement

### Prérequis

- Un navigateur Web récent.
- Visual Studio Code ou un autre éditeur de code.
- Git, pour cloner le dépôt si nécessaire.

### 1. Cloner le dépôt

```bash
git clone https://github.com/VOTRE-USERNAME/HelpDesk.git
```

### 2. Accéder au dossier

```bash
cd HelpDesk
```

### 3. Lancer l'application

Ouvrir le fichier `index.html` dans un navigateur.

Il est également possible d'utiliser l'extension Live Server de Visual Studio Code.

Aucune installation de dépendances n'est nécessaire.

L'application fonctionne entièrement dans le navigateur, sans backend, sans base de données et sans API externe.

## 🔗 Liens du projet

- 🌐 **Site Web — Live Demo :** [Lien vers la version en ligne](#)
- 💻 **GitHub Repository :** [Dépôt HelpDesk](https://github.com/VOTRE-USERNAME/HelpDesk)
- 🎨 **Maquette Figma :** [Lien vers la maquette](#)
- 📊 **Tableau Jira :** [Lien vers le tableau Jira](#)

Remplacer les liens indicatifs par les liens réels du projet. Supprimer les liens qui ne sont pas disponibles.

## 📸 Captures d'écran

Ajouter des captures d'écran de l'application dans le dossier `screenshots/`.

### 🏠 Interface principale

![Interface principale de HelpDesk](screenshots/accueil.png)

### 📋 Liste des demandes

![Liste des demandes de support](screenshots/demandes.png)

*Les captures d'écran doivent être ajoutées au dépôt et les chemins doivent correspondre aux fichiers existants.*

## 🧪 Tests et validation

Les tests permettent de vérifier le bon fonctionnement de l'application.

- Vérifier l'affichage des demandes initiales.
- Tester l'ajout d'une demande valide.
- Vérifier le refus des champs vides.
- Tester la validation des champs contenant uniquement des espaces.
- Vérifier les messages d'erreur et de confirmation.
- Vérifier la réinitialisation du formulaire.
- Tester la suppression d'une demande.
- Vérifier l'annulation de la suppression.
- Vérifier la mise à jour du compteur.
- Vérifier le message affiché lorsque la liste est vide.
- Tester l'affichage sur mobile, tablette et ordinateur.
- Vérifier l'absence d'erreurs bloquantes dans la console.

## ✅ Conclusion

Le projet HelpDesk m'a permis de mettre en pratique les compétences fondamentales du développement Front-End dans le cadre d'un projet individuel.

À travers ce projet, j'ai travaillé sur :

- La conception et l'intégration d'une interface Web.
- La structuration HTML5 et le style CSS3.
- Le Responsive Design.
- La manipulation du DOM avec JavaScript Vanilla.
- La gestion des événements et des formulaires.
- La validation des données utilisateur.
- L'ajout et la suppression dynamique des demandes.
- L'organisation du code en fonctions.
- Le versionnement avec Git et GitHub.
- La planification des tâches avec Jira.

Ce projet représente une première expérience pratique dans le développement d'une application Web interactive et constitue une base pour des projets plus avancés.

## 📄 Licence

Projet pédagogique réalisé individuellement dans le cadre de la formation **Développeur Web et Web Mobile — YouCode**.

© 2026 HelpDesk — Projet à but éducatif.