# Utiliser Node.js LTS
FROM node:20-alpine AS base

WORKDIR /app

# Copier package.json
COPY package*.json ./

# Stage de développement
FROM base AS development

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]

# Stage de production
FROM base AS production

ENV NODE_ENV=production

# Installer les dépendances
RUN npm install --only=production

# Copier le code
COPY . .

EXPOSE 3333

CMD ["npm", "start"]
