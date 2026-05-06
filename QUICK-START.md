# LáminaGol - Guía Rápida de Referencia

## 📍 Estás Aquí

Esta es la **estructura completa del proyecto** para LáminaGol - una aplicación de marketplace para láminas adhesivas del álbum del Mundial.

**Estado**: ✅ Listo para Implementación
**Ubicación**: `c:\Users\rochy\album-project\`
**Próximo Paso**: Comenzar con la Tarea 01 - Configuración del Proyecto

---

## 🎯 Comienza Aquí

### Para Gerentes de Proyecto
1. Leer: [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) - Resumen de 5 min
2. Revisar: [ROADMAP.md](docs/ROADMAP.md) - Características y cronograma
3. Monitorear: [NEXT_TASK.md](NEXT_TASK.md) - Progreso actual

### Para Desarrolladores (Backend)
1. Leer: [ARCHITECTURE.md](docs/ARCHITECTURE.md) - Stack tecnológico y diseño de API
2. Configurar: [scripts/SETUP.md](scripts/SETUP.md) - Desarrollo local
3. Tarea Actual: [NEXT_TASK.md](NEXT_TASK.md)
4. Guía de Agentes: [agents/README.md](agents/README.md)

### Para Desarrolladores (Frontend)
1. Leer: [ARCHITECTURE.md](docs/ARCHITECTURE.md) - Rutas y componentes
2. Configurar: [scripts/SETUP.md](scripts/SETUP.md) - Desarrollo local
3. Tarea Actual: [NEXT_TASK.md](NEXT_TASK.md)
4. Guía de Agentes: [agents/README.md](agents/README.md)

### Para Agentes de IA
1. Copiar tarea actual de [NEXT_TASK.md](NEXT_TASK.md)
2. Leer archivo completo de tarea desde [tasks/](tasks/)
3. Incluir [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
4. Seguir prompt del agente: [agents/{agent-name}/prompt.md](agents/)
5. Referenciar [docs/AGENTS.md](docs/AGENTS.md) para directrices

---

## 📚 Documentación Esencial

### Comprensión del Proyecto
| Archivo | Propósito | Tiempo de Lectura |
|---------|-----------|-------------------|
| [README.md](README.md) | Introducción principal del proyecto | 3 min |
| [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) | Resumen completo | 5 min |
| [docs/PROJECT-CONTEXT.md](docs/PROJECT-CONTEXT.md) | Referencia rápida | 3 min |

### Arquitectura y Diseño
| File | Purpose | Read Time |
|------|---------|-----------|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Tech stack & design | 10 min |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Features & timeline | 5 min |
| [docs/AGENTS.md](docs/AGENTS.md) | Agent guidelines | 5 min |

### Configuración y Comienzo
| Archivo | Propósito | Tiempo de Lectura |
|---------|-----------|-------------------|
| [scripts/SETUP.md](scripts/SETUP.md) | Configuración del entorno de desarrollo | 5 min |
| [docker-compose.yml](docker-compose.yml) | Configuración de contenedores | 2 min |
| [agents/README.md](agents/README.md) | Cómo activar agentes | 5 min |

### Decisiones de Arquitectura
| Archivo | Propósito |
|---------|-----------|
| [docs/adr/ADR-001-MVP-Scope.md](docs/adr/ADR-001-MVP-Scope.md) | Decisiones de características MVP |
| [docs/adr/ADR-002-Tech-Stack.md](docs/adr/ADR-002-Tech-Stack.md) | Selección de tecnologías |

---

## 🛣️ Ruta de Implementación

### Fase 1: MVP (10 Tareas)

```
01-project-setup.md ────┐
                         ├──→ 03-database-schema.md
02-authentication.md ───┘

03-database-schema.md ──→ 04-card-catalog-api.md ─→ 05-card-catalog-frontend.md

04-card-catalog-api.md ──→ 06-user-inventory.md

06-user-inventory.md ───→ 07-marketplace-list.md ──→ 08-marketplace-buy.md

08-marketplace-buy.md ──→ 09-exchange-system.md

09-exchange-system.md ──→ 10-user-profile.md
```

### Tarea Actual
```
→ NEXT_TASK.md
```

---

## 📂 Referencia de Carpetas

### Estructura del Proyecto
```
/ (root)
├── Documentation
│   ├── README.md
│   ├── NEXT_TASK.md
│   ├── PROJECT-SUMMARY.md
│   └── docker-compose.yml
│
├── docs/
│   ├── ARCHITECTURE.md     ← Read this first
│   ├── ROADMAP.md
│   ├── AGENTS.md
│   ├── PROJECT-CONTEXT.md
│   └── adr/                ← Architecture decisions
│
├── tasks/                  ← Implementation tasks (10 files)
│   ├── 01-project-setup.md
│   ├── 02-authentication.md
│   ├── ...
│   └── 10-user-profile.md
│
├── specs/                  ← Feature specifications (created by Product Agent)
│   └── README.md
│
├── agents/                 ← AI Agent development team
│   ├── README.md          ← How to activate agents
│   ├── product-agent/
│   ├── backend-agent/
│   ├── frontend-agent/
│   ├── data-agent/
│   └── testing-agent/
│
├── datasets/              ← Seed data files
│   └── worldcups.json
│
├── scripts/               ← Setup & utility scripts
│   └── SETUP.md
│
└── templates/             ← Templates for specs & tasks
    ├── spec-template.md
    └── task-template.md
```

---

## 🤖 Guía Rápida de Activación de Agentes

### Agente de Producto
```
Read: docs/ROADMAP.md, docs/ARCHITECTURE.md
Task: Create specs for Phase 1 features
Output: specs/ folder, updated NEXT_TASK.md
Activate: agents/product-agent/prompt.md
```

### Agente Backend
```
Leer: NEXT_TASK.md, archivo de tarea actual, docs/ARCHITECTURE.md
Tarea: Implementar APIs y servicios
Salida: Código backend, pruebas
Activar: agents/backend-agent/prompt.md
```

### Agente Frontend
```
Leer: NEXT_TASK.md, archivo de tarea actual, docs/ARCHITECTURE.md
Tarea: Implementar componentes UI y páginas
Salida: Código frontend, componentes, pruebas
Activar: agents/frontend-agent/prompt.md
```

### Agente de Datos
```
Leer: tasks/03-database-schema.md, docs/ARCHITECTURE.md
Tarea: Configurar esquema de base de datos y datos semilla
Salida: Esquema Prisma, migraciones, script semilla
Activar: agents/data-agent/prompt.md
```

### Agente de Pruebas
```
Leer: Código de tarea completada, directrices de pruebas
Tarea: Escribir pruebas y verificar implementación
Salida: Archivos de pruebas, reportes de cobertura
Activar: agents/testing-agent/prompt.md
```

See [agents/README.md](agents/README.md) for detailed instructions.

---

## ✅ Lista de Verificación de Tareas

### Lista de Verificación de Implementación de Fase 1

- [ ] **Tarea 01** - Configuración del Proyecto
  - [ ] Backend inicializado
  - [ ] Frontend inicializado
  - [ ] Docker configurado

- [ ] **Tarea 02** - Autenticación
  - [ ] Endpoint de registro
  - [ ] Endpoint de inicio de sesión
  - [ ] Middleware de autenticación
  - [ ] Formularios UI

- [ ] **Tarea 03** - Esquema de Base de Datos
  - [ ] Todos los modelos definidos
  - [ ] Migraciones creadas
  - [ ] Script semilla funcionando

- [ ] **Tarea 04** - API del Catálogo de Láminas
  - [ ] GET /api/laminas
  - [ ] GET /api/mundiales
  - [ ] Filtrado y paginación

- [ ] **Tarea 05** - UI del Catálogo de Láminas
  - [ ] Página de exploración
  - [ ] Cuadrícula de láminas
  - [ ] Filtro por año

- [ ] **Tarea 06** - Inventario de Usuario
  - [ ] GET /api/usuarios/:id/inventario
  - [ ] Página Mi Colección
  - [ ] Visualización de estadísticas

- [ ] **Tarea 07** - Lista del Marketplace
  - [ ] Listar láminas en venta
  - [ ] Filtrar por precio
  - [ ] Página del marketplace

- [ ] **Tarea 08** - Compra en Marketplace
  - [ ] Endpoint de compra
  - [ ] Creación de transacción
  - [ ] Actualización de inventario

- [ ] **Tarea 09** - Sistema de Intercambios
  - [ ] Endpoint para crear oferta
  - [ ] Aceptar/rechazar ofertas
  - [ ] Página de intercambios

- [ ] **Tarea 10** - Perfil de Usuario
  - [ ] Página de perfil
  - [ ] Editar perfil
  - [ ] Estadísticas de colección

---

## 🚀 Comandos Rápidos

### Configuración
```bash
# 1. Clonar y navegar
git clone <url-del-repo>
cd album-project

# 2. Iniciar servicios Docker
docker-compose up

# 3. Backend (nueva terminal)
cd backend && npm install && npm run dev

# 4. Frontend (nueva terminal)
cd frontend && npm install && npm run dev

# 5. Abrir navegador
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
```

### Desarrollo
```bash
# Backend
npm run dev           # Iniciar servidor de desarrollo
npm test             # Ejecutar pruebas
npx prisma studio  # Ver base de datos

# Frontend
npm run dev           # Iniciar servidor de desarrollo
npm test             # Ejecutar pruebas
npm run build        # Construir para producción
```

### Base de Datos
```bash
npx prisma migrate dev      # Create migration
npm run seed               # Seed sample data
npx prisma studio        # Open database GUI
```

---

## 🔗 Enlaces Clave

| Recurso | Enlace |
|---------|--------|
| **Comenzar Aquí** | [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) |
| **Tarea Actual** | [NEXT_TASK.md](NEXT_TASK.md) |
| **Arquitectura** | [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| **Guía de Configuración** | [scripts/SETUP.md](scripts/SETUP.md) |
| **Todas las Tareas** | [tasks/](tasks/) |
| **Guía de Agentes** | [agents/README.md](agents/README.md) |
| **Referencia Rápida** | [docs/PROJECT-CONTEXT.md](docs/PROJECT-CONTEXT.md) |

---

## 💡 Consejos

✅ **Siempre comenzar con NEXT_TASK.md**
✅ **Leer archivo completo de tarea + ARCHITECTURE.md**
✅ **Seguir criterios de aceptación exactamente**
✅ **Escribir pruebas antes de marcar como completo**
✅ **Actualizar NEXT_TASK.md después de terminar**
✅ **Mantener código simple (solo MVP)**
✅ **Preguntar en notas de tarea**

❌ **No agregar características no incluidas en la tarea**
❌ **No omitir pruebas**
❌ **No hardcodear valores**
❌ **No hacer merge sin revisión de código**
❌ **No ignorar errores de TypeScript**

---

## ❓ Preguntas Frecuentes

**P: ¿Dónde comenzar?**
R: [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) → [scripts/SETUP.md](scripts/SETUP.md) → [NEXT_TASK.md](NEXT_TASK.md)

**P: ¿Cómo configurar mi entorno?**
R: Seguir [scripts/SETUP.md](scripts/SETUP.md)

**P: ¿Qué tarea debería trabajar ahora?**
R: Revisar [NEXT_TASK.md](NEXT_TASK.md)

**P: ¿Cómo usar agentes IA?**
R: Leer [agents/README.md](agents/README.md)

**P: ¿Cuál es la arquitectura?**
R: Leer [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

**P: ¿Puedo omitir la base de datos?**
R: No, usar docker-compose para configuración fácil

**P: ¿Qué framework de pruebas?**
R: Backend: Jest, Frontend: Jest + React Testing Library

**P: ¿Dónde está el roadmap?**
R: [docs/ROADMAP.md](docs/ROADMAP.md)

---

## 📞 Support Resources

| Issue | Solution |
|-------|----------|
| Need project overview | Read [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) |
| Can't set up environment | Follow [scripts/SETUP.md](scripts/SETUP.md) |
| Don't understand architecture | Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| Stuck on current task | Check [NEXT_TASK.md](NEXT_TASK.md) and task file |
| Agent questions | See [agents/README.md](agents/README.md) |
| Database issues | Check `npx prisma studio` or [docs/PROJECT-CONTEXT.md](docs/PROJECT-CONTEXT.md) |
| Want to know what's next | Read [docs/ROADMAP.md](docs/ROADMAP.md) |

---

**Generated**: May 5, 2026
**Project**: LáminaGol - World Cup Album Card Marketplace
**Status**: ✅ Ready for Phase 1 Implementation
