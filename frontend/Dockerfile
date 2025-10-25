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

EXPOSE 5173

CMD ["npm", "run", "dev"]

# Stage de production
FROM base AS production

# Installer et build
RUN npm install
COPY . .
RUN npm run build

# Servir avec un serveur simple
FROM node:20-alpine AS serve
WORKDIR /app
RUN npm install -g serve
COPY --from=production /app/dist /app/dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
