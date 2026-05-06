# Dockerfile para el backend de LáminaGol
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY tsconfig.json ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY src/ ./src/

# Crear directorio para logs
RUN mkdir -p /app/logs

# Exponer puerto
EXPOSE 3001

# Comando por defecto
CMD ["npm", "run", "dev"]