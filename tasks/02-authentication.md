# Task: User Authentication System

## Description

Implement user registration, login, and JWT-based authentication. Create user model and authentication middleware.

## Acceptance Criteria

- [ ] User model in Prisma with email, username, password hash
- [ ] POST /api/auth/register endpoint
- [ ] POST /api/auth/login endpoint
- [ ] JWT generation and validation
- [ ] Auth middleware for protected routes
- [ ] Password hashing (bcrypt)
- [ ] Input validation and error handling
- [ ] Unit tests for auth service

## Implementation Details

### Backend

**Prisma Model** - `prisma/schema.prisma`
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  username  String   @unique
  password  String   // hashed
  avatar    String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

**Service** - `src/services/auth.service.ts`
- `register(email, username, password)` - Create user, hash password
- `login(email, password)` - Verify credentials, return JWT
- `verifyToken(token)` - Decode and validate JWT

**Routes** - `src/routes/auth.ts`
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login and get token

**Middleware** - `src/middleware/auth.ts`
- `authenticate()` - Validate JWT from header
- Attach user to request

### Frontend

**Components** - `components/Auth/`
- `LoginForm.tsx` - Email, password inputs
- `RegisterForm.tsx` - Email, username, password inputs
- Form validation with error messages

**Pages** - `app/auth/`
- `app/auth/login/page.tsx`
- `app/auth/register/page.tsx`

**Hooks** - `hooks/useAuth.ts`
- `useLogin()` - Handle login
- `useRegister()` - Handle registration
- Store token in localStorage

## Testing

- Test register with valid/invalid inputs
- Test login success and failure
- Test token validation
- Test protected route access
- UI login/register forms work

## Assigned To

Backend Agent, Frontend Agent, Testing Agent

## Notes

- Use bcryptjs for password hashing
- Use jsonwebtoken for JWT
- Token expiration: 7 days
- Store token in localStorage (frontend)
