FROM node:18-alpine3.18

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install --only=production

# Copiar el código fuente
COPY . .

# Cambiar permisos
RUN chown -R node:node /opt/app
USER node

# Build de la aplicación
RUN npm run build

EXPOSE 1337

# Comando para producción
CMD ["npm", "run", "start"]