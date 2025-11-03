# Maintenance Car 🚗

Infrastructure Docker pour application de maintenance automobile.

## 🏗️ Architecture

- **Backend**: Adonis.js v6 + PostgreSQL 16
- **Frontend**: React 18 + Vite + TypeScript
- **Infrastructure**: Docker + Docker Compose

## 📋 Prérequis

- Docker Desktop (Windows/Mac) ou Docker Engine + Docker Compose (Linux)
- Node.js 20+ (optionnel, pour développement local)

## 🚀 Démarrage

### 1. Configuration

Créer le fichier `.env` :

```bash
# Windows
copy env.docker.example .env

# Linux/Mac
cp env.docker.example .env
```

### 2. Lancer Docker

```bash
docker-compose up -d
```

### 3. Accès

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3333
- **PostgreSQL**: localhost:5432

## 🛠️ Commandes

```bash
docker-compose up -d              # Démarrer
docker-compose down               # Arrêter
docker-compose logs -f            # Voir les logs
docker-compose ps                 # État des containers
docker-compose exec backend sh    # Shell backend
docker-compose exec frontend sh   # Shell frontend
```

## 📦 Structure

```
MaintenanceCar/
├── backend/               # Votre backend Adonis.js
│   ├── Dockerfile
│   └── package.json
├── frontend/              # Votre frontend React
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml     # Config développement
├── docker-compose.prod.yml # Config production
└── .env                   # Variables d'environnement
```

## 🚢 Production

```bash
docker-compose -f docker-compose.prod.yml up -d
```
