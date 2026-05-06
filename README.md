# WorldCard - Plataforma de Intercambio y Venta de Láminas

Una aplicación web moderna para comprar, vender e intercambiar láminas de álbumes de Mundiales de fútbol.

## Descripción

WorldCard permite a los usuarios:
- Comprar y vender láminas de Mundiales de fútbol
- Intercambiar láminas con otros usuarios
- Explorar láminas de Mundiales históricos clasificadas por año
- Gestionar su inventario personal
- Realizar transacciones seguras

## Stack Tecnológico

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

```
album-project/
├── README.md
├── NEXT_TASK.md
├── docs/
│   ├── ARCHITECTURE.md
│   ├── ROADMAP.md
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
```

## Quick Start

1. **Leer documentación**
   - `docs/ARCHITECTURE.md` - Arquitectura del sistema
   - `docs/ROADMAP.md` - Plan de desarrollo

2. **Seguir tareas**
   - Revisar `NEXT_TASK.md`
   - Ejecutar la tarea indicada
   - Actualizar `NEXT_TASK.md` al completar

3. **Usar AI Agents**
   - Compartir `NEXT_TASK.md` con Copilot/Claude
   - Incluir `docs/ARCHITECTURE.md` y archivos relevantes

## Workflow

```
1. Product Agent: Define specs desde ROADMAP
2. Backend Agent: Implementa APIs
3. Frontend Agent: Crea UI según specs
4. Data Agent: Prepara datasets
5. Testing Agent: Valida la implementación
```
