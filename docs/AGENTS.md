# Agent Rules - LáminaGol

## General Guidelines

All agents should:

1. **Read the current state**
   - `docs/ARCHITECTURE.md` - Tech stack y constraints
   - `docs/ROADMAP.md` - Prioridades y timeline
   - `NEXT_TASK.md` - Tarea actual

2. **Follow the architecture**
   - Backend: Express.js + PostgreSQL + Prisma
   - Frontend: Next.js + TailwindCSS
   - Type safety con TypeScript

3. **Write modular code**
   - Controladores, servicios, repositorios (backend)
   - Componentes, hooks, servicios (frontend)
   - Reutilizable y testeable

4. **Prefer simplicity**
   - No dependencies innecesarias
   - No sobre-ingeniería
   - Soluciones pragmáticas

5. **Documentación mínima pero clara**
   - Comentarios en lógica compleja
   - README en carpetas importantes
   - Comentarios en tipos TypeScript

## Agent Specific Rules

### Product Agent
- Define specs basados en ROADMAP
- Crea archivos en `specs/`
- Genera tasks en `tasks/`
- Actualiza `NEXT_TASK.md`

### Backend Agent
- Implementa APIs según specs
- Mantiene estructura de carpetas
- Escribe tests unitarios
- Actualiza documentación de endpoints

### Frontend Agent
- Crea componentes reutilizables
- Sigue diseño en specs
- Implementa forms con validación
- Optimiza performance

### Data Agent
- Prepara datasets de cards
- Scripts de seed para dev
- Migraciones Prisma
- Datasets en `datasets/`

### Testing Agent
- Tests unitarios (backend)
- Tests de componentes (frontend)
- Integration tests críticos
- Coverage mínimo 70%

## Code Style

### Backend
```javascript
// Express route handler
app.get('/api/cards/:year', async (req, res) => {
  const cards = await cardService.getByYear(req.params.year);
  res.json(cards);
});
```

### Frontend
```typescript
// React component
export const CardGrid = ({ cards, onSelect }) => {
  return (
    <div className="grid gap-4">
      {cards.map(card => (
        <CardItem key={card.id} card={card} onClick={() => onSelect(card)} />
      ))}
    </div>
  );
};
```

## Task Execution Checklist

- [ ] Leer tarea en `NEXT_TASK.md`
- [ ] Revisar specs relevantes en `specs/`
- [ ] Revisar architecture en `docs/`
- [ ] Implementar funcionalidad
- [ ] Escribir tests
- [ ] Commit con mensaje claro
- [ ] Actualizar `NEXT_TASK.md` si aplica
