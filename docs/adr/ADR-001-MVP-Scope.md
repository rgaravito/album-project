# Architecture Decision Record - MVP Scope

## Status
Accepted

## Decision
Define the MVP (Minimum Viable Product) scope to launch LáminaGol with essential features only. Cut all non-core features.

## Context

The initial vision for LáminaGol included many features:
- Payment processing
- Gamification (points, badges)
- Chat/messaging
- Notifications
- Admin panel
- Mobile app
- Recommendations engine

This is too large for MVP. We need to focus on core value.

## Core Value of LáminaGol

Users can **buy, sell, and exchange** World Cup album stickers with each other. That's it.

## MVP Features

✅ **Must Have**
1. User authentication (register, login)
2. Sticker catalog (browse by year)
3. Personal inventory/collection
4. Marketplace (list, buy)
5. Exchange system (trade stickers)
6. User profile
7. Transaction history

❌ **Will NOT Include in MVP**
- Payment processing (simulate with placeholder)
- Email notifications
- Real-time chat
- Admin panel
- Rating/review system
- Points or gamification
- Mobile app (web only)
- Advanced search/recommendations
- File uploads for avatar
- Analytics

## Tech Choices

**Frontend**: Next.js 14 + TailwindCSS
- Why: Fast development, built-in optimization, great DX

**Backend**: Node.js/Express + PostgreSQL
- Why: Simple, scalable, developer-friendly

**Database**: PostgreSQL + Prisma
- Why: Type-safe migrations, simple ORM

**Infrastructure**: Docker Compose (local dev)
- Why: Easy setup, consistent environment

## Deferred to Phase 2+

- Redis caching
- Payment gateway integration
- Email/push notifications
- Advanced UI (dark mode, animations)
- Mobile app
- Admin dashboard

## Success Criteria for MVP

- Users can complete full card exchange lifecycle
- All core features working without major bugs
- No unnecessary dependencies or complexity
- Clear onboarding for new users
- Deployable and testable

## Related Decisions

- ADR-001: API-First Design → REST API before mobile app
- ADR-002: Single Database → PostgreSQL for all data

## Consequences

✅ Faster time to market
✅ Lower initial complexity
✅ Easier to test and debug
✅ Foundation for Phase 2 features

⚠️ No payment features (affects business model)
⚠️ No notifications (affects user engagement initially)
⚠️ No mobile (web only)

## Next Steps

1. Implement 10 core tasks (Phase 1)
2. Beta test with friends
3. Gather feedback
4. Plan Phase 2 with real user data
