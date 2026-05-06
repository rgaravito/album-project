# Scripts Folder

Utility scripts for setup, seeding, and maintenance.

## Files

- `seed.ts` - Database seeding script (Data Agent creates this)
- `setup.sh` - Setup script for new developers

## Running Scripts

```bash
# Seed database
npm run seed

# Or with TypeScript
npx ts-node scripts/seed.ts
```

## Common Tasks

### Initialize Database
```bash
npx prisma migrate dev --name init
npm run seed
```

### View Database
```bash
npx prisma studio
```

### Create New Migration
```bash
npx prisma migrate dev --name <migration_name>
```
