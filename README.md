# 🚗 MaintenanceCar - Application de Gestion et Suivi d'Entretien de Véhicules

Application complète permettant aux utilisateurs de gérer et suivre l'historique d'entretien de leurs véhicules, avec gestion des factures, planification et tableau de bord personnalisé.

---

## 📋 Table des matières

- [Objectifs](#-objectifs)
- [Fonctionnalités](#-fonctionnalités)
- [Architecture technique](#-architecture-technique)
- [Installation](#-installation)
- [Roadmap](#-roadmap)
- [Contribuer](#-contribuer)

---

## 🎯 Objectifs

### Phase 1

Développer une application permettant à un utilisateur de :

- ✅ Créer un compte et s'identifier de manière sécurisée
- ✅ Ajouter et gérer plusieurs véhicules
- ✅ Associer des informations détaillées à chaque véhicule
- ✅ Enregistrer l'historique complet des entretiens réalisés
- ✅ Lier chaque entretien à des factures, pièces et informations associées
- ✅ Disposer d'un agenda et d'une vue globale par véhicule

---

## 🚀 Fonctionnalités

### 👤 Gestion des Utilisateurs

#### Inscription / Connexion
- Création de compte avec email et mot de passe
- Connexion sécurisée avec authentification JWT
- Édition des informations personnelles (nom, prénom, etc.)

#### Gestion du Profil
- Espace personnel pour chaque utilisateur
- Véhicules et entretiens liés au compte utilisateur

---

### 🚙 Gestion des Véhicules

#### Ajout d'un Véhicule

**Champs obligatoires :**
- Marque
- Modèle
- Année de mise en circulation
- Kilométrage actuel

**Champs optionnels :**
- Immatriculation
- Numéro de série (VIN)
- Type de carburant / motorisation
- Puissance / cylindrée
- Couleur
- Date d'acquisition

#### Fonctionnalités
- ✏️ Modifier les informations d'un véhicule
- 🗑️ Supprimer un véhicule
- 📋 Liste complète des véhicules de l'utilisateur

---

### 🛠️ Gestion des Entretiens

#### Création d'un Entretien

Chaque entretien est lié à un véhicule spécifique et contient :

- **Titre** : Description de l'entretien (ex: "Vidange moteur", "Changement de plaquettes de freins")
- **Description** : Détails supplémentaires (facultatif)
- **Date** : Date de réalisation de l'entretien
- **Kilométrage** : Kilométrage du véhicule lors de l'entretien
- **Prestataire** : Société/garage ou nom du mécanicien
- **Pièces** : Liste des pièces changées avec nom, référence, fournisseur
- **Coût** : Coût global de l'entretien
- **Factures** : Upload de fichiers/images associés

#### Fonctionnalités
- ✏️ Modifier un entretien existant
- 🗑️ Supprimer un entretien
- 📎 Lier plusieurs factures à un même entretien

---

### 📅 Agenda et Suivi

#### Vue Agenda / Timeline
- 📆 Liste chronologique des entretiens passés
- 🔍 Filtrage par véhicule
- 📊 Affichage par date et type d'entretien

#### Préparation Phase 2
Structure prévue pour :
- ⏰ Rappels automatiques pour les futurs entretiens
- 📍 Notifications basées sur le kilométrage ou la date

---

### 📊 Tableau de Bord et Synthèse

#### Vue par Véhicule
- 📈 Historique complet des entretiens
- 🔢 Nombre total d'entretiens effectués
- 🕐 Dernier entretien (date + type)
- 📑 Liste des factures liées

#### Architecture Évolutive
Structure préparée pour des statistiques futures :
- 💰 Coût total par véhicule
- 📊 Fréquence des entretiens
- 📈 Analyse des dépenses

---

### 📂 Gestion des Factures et Documents

- 📤 Upload de fichiers (images ou PDF)
- 🔗 Association à un entretien spécifique
- 📎 Support multi-factures par entretien
- 💾 Stockage sécurisé des documents

---

## 🔧 Architecture Technique

### Backend
- **Framework** : Node.js avec Express.js
- **API** : Architecture REST
- **Authentification** : JWT (JSON Web Tokens)
- **Validation** : Middleware de validation des données

### Base de Données
- **Type** : Relationnelle (PostgreSQL recommandé) ou NoSQL (MongoDB)
- **ORM** : Prisma / Sequelize (SQL) ou Mongoose (MongoDB)

### Frontend
**Options recommandées :**
- Application web responsive : React.js / Vue.js / Angular
- Application mobile : Flutter / React Native

**Caractéristiques :**
- Interface utilisateur moderne et intuitive
- Design responsive (mobile-first)
- UX optimisée

### Stockage des Fichiers
- Stockage externe recommandé : AWS S3, Google Cloud Storage
- Alternative locale : système de fichiers avec gestion sécurisée
- ❌ Base64 en base de données déconseillé

### Sécurité
- 🔐 Hashage des mots de passe (bcrypt)
- 🔑 Authentification par tokens JWT
- 🛡️ Validation et sanitization des inputs
- 🔒 HTTPS pour les communications

---

## 📦 Installation

### Prérequis

```bash
# Node.js (v16 ou supérieur)
node --version

# npm ou yarn
npm --version
```

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/MaintenanceCar.git
cd MaintenanceCar

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env

# Lancer les migrations de base de données
npm run migrate

# Démarrer l'application
npm run dev
```

### Configuration

Créer un fichier `.env` à la racine du projet :

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/maintenancecar"

# JWT
JWT_SECRET="votre_secret_jwt_tres_securise"
JWT_EXPIRES_IN="7d"

# Server
PORT=3000
NODE_ENV="development"

# Storage (optionnel)
AWS_ACCESS_KEY_ID="votre_access_key"
AWS_SECRET_ACCESS_KEY="votre_secret_key"
AWS_BUCKET_NAME="maintenancecar-storage"
```

---

## ✅ Roadmap

### Phase 1 (En cours)

- [ ] Système d'authentification (inscription/connexion)
- [ ] CRUD complet des véhicules
- [ ] CRUD complet des entretiens
- [ ] Upload et gestion des factures
- [ ] Vue agenda/timeline des entretiens
- [ ] Tableau de bord simplifié par véhicule

### Phase 2 (À venir)

- [ ] Système de rappels et notifications
- [ ] Statistiques avancées par véhicule
- [ ] Export des données (PDF, Excel)
- [ ] Gestion des carnets d'entretien
- [ ] Partage de véhicules entre utilisateurs
- [ ] Application mobile native

### Phase 3 (Future)

- [ ] Intégration avec des APIs de garages partenaires
- [ ] Recommandations d'entretien basées sur l'IA
- [ ] Marketplace de pièces détachées
- [ ] Communauté et partage d'expériences

---

## 👥 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à :

1. 🍴 Fork le projet
2. 🌿 Créer une branche (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push vers la branche (`git push origin feature/AmazingFeature`)
5. 🔀 Ouvrir une Pull Request

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

## 🙏 Remerciements

Merci à tous les contributeurs qui participent à l'amélioration de MaintenanceCar !

---

**Fait avec ❤️ pour simplifier la gestion de l'entretien de vos véhicules**

