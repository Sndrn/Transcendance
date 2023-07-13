# Utilise une image node js préexistante en tant que base
FROM node:latest

# Créer un répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copier les fichiers package.json package-loc vers le répertoire de travail
COPY package*.json ./

# Instal les dépendances de l'application
RUN npm install

# Copie les reste des fichiers du projet
COPY . .

# Contruit l'application pour la production
RUN npm run build

# Expose le port sur lequel votre application écoute
EXPOSE 3000

# Démarre l'application lors du lancement du conteneur
CMD [ "npm", "run", "dev"]