FROM node:18-alpine3.18

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

WORKDIR /opt/app

COPY package.json package-lock.json ./

RUN npm config set fetch-retry-maxtimeout 600000 -g \
    && npm ci --only=production

COPY . .

ENV NODE_ENV=production
RUN npm run build

RUN chown -R node:node /opt/app
USER node

EXPOSE 1337

CMD ["npm", "run", "start"]