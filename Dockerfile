#Dependencias de desarrollo
FROM node:19.2-alpine3.16 as deps
# directorio de trabajo
WORKDIR /app
# Copiar el package a la raiz de el directorio de trabajo
COPY package.json ./
# instalar las dependencias
RUN yarn install


#Dependencias de producción
FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN yarn install --prod

# Crear runner de la aplicación (ejecutar)
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules

COPY dist/ ./
# Comando cuando se ejecuta la aplicación
CMD ["node", "app.js"]