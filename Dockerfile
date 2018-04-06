FROM node:latest

WORKDIR /var/www/html/themes/Frontend/ResponsiveSCSS
COPY package.json /var/www/html/themes/Frontend/ResponsiveSCSS/package.json

RUN npm install
