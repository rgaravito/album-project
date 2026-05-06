# Dockerfile para el frontend de LáminaGol
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY next.config.js ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY tsconfig.json ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY app/ ./app/
COPY components/ ./components/
COPY hooks/ ./hooks/
COPY public/ ./public/

# Exponer puerto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "dev"]