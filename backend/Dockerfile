# Utiliser Node.js LTS
FROM node:22.16.0-alpine3.22 AS base


# Stage de développement
FROM base AS development

WORKDIR /app

# Copier package.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]

# # Stage de production
# FROM base AS production

# ENV NODE_ENV=production

# # Installer les dépendances
# RUN npm install --only=production

# # Copier le code
# COPY . .

# EXPOSE 3333

# CMD ["npm", "start"]

# --from AdonisJS Docs--
# All deps stage
FROM base AS deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci

# Production only deps stage
FROM base AS production-deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci --omit=dev

# Build stage
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD . .
RUN node ace build

# Production stage
FROM base AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app
EXPOSE 3333
CMD ["node", "./bin/server.js"]

