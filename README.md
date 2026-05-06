# LáminaGol - Plataforma de Intercambio y Venta de Láminas

Una aplicación web moderna para comprar, vender e intercambiar láminas adhesivas del álbum de Mundiales de fútbol.

## Descripción

LáminaGol permite a los usuarios:
- Comprar y vender láminas adhesivas del álbum de Mundiales de fútbol
- Intercambiar láminas adhesivas con otros usuarios
- Explorar láminas adhesivas de Mundiales históricos clasificadas por año
- Gestionar su inventario personal
- Realizar transacciones seguras

## Estado del Proyecto

✅ **Completado:**
- Estructura básica del proyecto creada
- Frontend con Next.js 14 en español
- Backend con Express.js y TypeScript
- Configuración de Docker actualizada
- Documentación traducida al español
- Servidores de desarrollo funcionales

🚧 **En Progreso:**
- Implementación de funcionalidades MVP
- Base de datos y esquemas Prisma
- Autenticación de usuarios
- APIs del catálogo de láminas

📋 **Próximas Tareas:**
- Ver `NEXT_TASK.md` para la tarea actual
- Seguir el roadmap en `docs/ROADMAP.md`

### Backend
- **Node.js** - Runtime
- **Express.js** - Framework web
- **PostgreSQL** - Base de datos relacional
- **Prisma** - ORM

### Frontend
- **Next.js** - Framework React
- **TailwindCSS** - Estilos
- **React Query** - State management

### Infraestructura
- **Docker** - Containerización
- **GitHub Actions** - CI/CD

## Estructura del Proyecto

album-project/
├── README.md
├── NEXT_TASK.md
├── PROJECT-SUMMARY.md
├── QUICK-START.md
├── docker-compose.yml
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   └── index.ts
│   └── .env.example
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── tsconfig.json
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── .dockerignore
├── docs/
│   ├── ARCHITECTURE.md
│   ├── ROADMAP.md
│   ├── AGENTS.md
│   ├── PROJECT-CONTEXT.md
│   └── adr/
├── tasks/
├── specs/
├── agents/
│   ├── product-agent/
│   ├── backend-agent/
│   ├── frontend-agent/
│   ├── data-agent/
│   └── testing-agent/
├── datasets/
├── scripts/
└── templates/

## Inicio Rápido

### Prerrequisitos
- Docker y Docker Compose
- Node.js 18+
- Git

### Instalación y Ejecución

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd album-project
   ```

2. **Iniciar servicios con Docker**
   ```bash
   docker-compose up -d
   ```

3. **Instalar dependencias del backend**
   ```bash
   cd backend
   npm install
   ```

4. **Instalar dependencias del frontend**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Ejecutar el proyecto**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run dev

   # Terminal 2 - Frontend
   cd frontend && npm run dev
   ```

6. **Acceder a la aplicación**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Health check: http://localhost:3001/api/health

### Leer Documentación
- `PROJECT-SUMMARY.md` - Resumen completo del proyecto
- `QUICK-START.md` - Guía de referencia rápida
- `docs/ARCHITECTURE.md` - Arquitectura del sistema
- `docs/ROADMAP.md` - Plan de desarrollo

## Flujo de Trabajo

```
1. Agente de Producto: Define especificaciones desde ROADMAP
2. Agente Backend: Implementa APIs
3. Agente Frontend: Crea UI según especificaciones
4. Agente de Datos: Prepara datasets
5. Agente de Pruebas: Valida la implementación
```

### Seguimiento de Tareas
- Revisar `NEXT_TASK.md` para la tarea actual
- Ejecutar la tarea indicada siguiendo los criterios de aceptación
- Actualizar `NEXT_TASK.md` al completar cada tarea

### Uso de Agentes IA
- Compartir `NEXT_TASK.md` con Copilot/Claude
- Incluir `docs/ARCHITECTURE.md` y archivos relevantes
- Seguir las directrices en `agents/README.md`
