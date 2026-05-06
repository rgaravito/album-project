# System Architecture - WorldCard

## Overview

WorldCard es una aplicación web para intercambio y venta de láminas de Mundiales. Utilizamos una arquitectura modular con separación clara entre frontend y backend.

## Tech Stack

### Frontend
- **Next.js 14+** - React framework con SSR/SSG
- **TailwindCSS** - Utilidades CSS
- **React Query** - Gestión de estado del servidor
- **TypeScript** - Type safety

### Backend
- **Node.js 18+** - Runtime
- **Express.js** - Framework web minimalista
- **PostgreSQL 14+** - Base de datos relacional
- **Prisma 5+** - ORM con type safety
- **TypeScript** - Type safety

### Database
- **PostgreSQL** - Datos transaccionales
- **Prisma** - Migraciones y queries type-safe

### Infrastructure
- **Docker** - Containerización
- **Docker Compose** - Orquestación local
- **GitHub Actions** - CI/CD pipeline

## Core Features

### 1. User Management
- Autenticación con JWT
- Perfiles de usuario con inventario

### 2. Card Marketplace
- Catálogo de láminas por año del Mundial
- Búsqueda y filtrado
- Compra/venta de láminas
- Intercambios entre usuarios

### 3. Inventory System
- Gestión de colecciones personales
- Estado de láminas (disponible, vendida, intercambiada)
- Histórico de transacciones

### 4. Transactions
- Compra/venta directo
- Intercambio de láminas
- Ofertas y contraoffertas

## Database Schema (Simplified)

```
Users
├── id, email, username, avatar
└── createdAt, updatedAt

Cards (Láminas)
├── id, number, year, team, country
├── player_name, rarity
└── createdAt

UserCards (Inventario)
├── userId, cardId, quantity
├── status (available, sold, exchanged)
└── price, listedAt

Transactions
├── id, type (buy, sell, exchange)
├── from_user, to_user
├── cards (JSON array)
├── price, status
└── createdAt

WorldCup (Mundiales)
├── id, year, country
└── total_cards
```

## API Endpoints (Backend)

```
Auth:
  POST /api/auth/register
  POST /api/auth/login
  POST /api/auth/logout

Users:
  GET /api/users/:id
  PUT /api/users/:id
  GET /api/users/:id/inventory

Cards:
  GET /api/cards
  GET /api/cards/year/:year
  GET /api/cards/:id

Market:
  GET /api/market/cards (listadas para venta)
  GET /api/market/offers
  POST /api/market/buy
  POST /api/market/sell
  POST /api/market/exchange

Transactions:
  GET /api/transactions
  GET /api/transactions/:id
```

## Frontend Routes

```
/ - Home, hero, featured cards
/explore - Explorador de láminas por año
/market - Marketplace (compra/venta)
/my-collection - Mi colección personal
/exchanges - Mis intercambios
/transactions - Historial
/profile - Perfil de usuario
```

## Security

- JWT para autenticación
- CORS configurado
- Rate limiting en endpoints públicos
- Validación de entrada en backend
- HTTPS en producción

## Deployment

### Local Development
```bash
docker-compose up
# Backend: http://localhost:3001
# Frontend: http://localhost:3000
```

### Production
- Backend: Node.js en container
- Frontend: Next.js en Vercel (o container)
- Database: PostgreSQL managed

## Performance Considerations

- Caché de catálogo de cards (Redis opcional, fase 2)
- Paginación en endpoints de listado
- Optimización de imágenes en Next.js
- Lazy loading del inventario
