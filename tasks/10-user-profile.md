# Task: User Profile & Settings

## Description

Implement user profile page and basic settings. Allow users to view/edit their profile information.

## Acceptance Criteria

- [ ] GET /api/users/:id - Fetch user profile
- [ ] PUT /api/users/:id - Update profile
- [ ] User profile page `/profile`
- [ ] Display username, email, avatar
- [ ] Edit profile form
- [ ] Avatar upload (optional file upload or URL)
- [ ] Collection stats on profile
- [ ] User's listed stickers visible
- [ ] Response validation
- [ ] Unit tests

## Implementation Details

### Backend Routes - `src/routes/users.ts`

```typescript
GET /api/users/:id
Response: {
  id: string,
  username: string,
  email: string,
  avatar: string,
  createdAt: Date,
  stats: {
    cardsInCollection: number,
    cardsForSale: number,
    memberSince: string
  }
}

PUT /api/users/:id
Body: { username?: string, avatar?: string }
Response: { success: true, user: User }
```

### Service Layer - `src/services/user.service.ts`

- `getUserById(id)` - Get user profile with stats
- `updateUser(id, data)` - Update profile
- `getUserStats(id)` - Collection stats
- `validateUsername(username)` - Check availability

### Frontend Pages - `app/profile/`

**`app/profile/page.tsx`** OR `app/profile/:userId/page.tsx`
- Public profile view
- User info, avatar, stats
- Collections and listed cards
- (Optional: Follow button, Phase 2)

**`app/profile/edit/page.tsx`** (Private, auth required)
- Edit profile form
- Update username, avatar
- Save changes

### Components - `components/Profile/`

**`ProfileHeader.tsx`**
- Avatar
- Username
- Member since
- Stats (cards, listed)

**`ProfileStats.tsx`**
- \"45 Cards Collected\"
- \"3 World Cups\"
- \"8 Cards Listed\"

**`EditProfileForm.tsx`**
- Username input
- Avatar input (file or URL)
- Save button
- Cancel button

### Hooks - `hooks/useUser.ts`

```typescript
export const useUser = (userId: string) => {
  return useQuery(['user', userId], () =>
    fetch(`/api/users/${userId}`).then(r => r.json())
  );
};

export const useUpdateProfile = () => {
  return useMutation((data) =>
    fetch(`/api/users/me`, { method: 'PUT', body: JSON.stringify(data) })
  );
};
```

## Testing

1. View user profile
2. Profile displays correctly
3. Edit profile - updates successfully
4. Stats calculate correctly
5. Avatar loads
6. Validation works

## Assigned To

Backend Agent, Frontend Agent, Testing Agent

## Notes

- Avatar: Just URL for MVP (no file upload yet)
- Stats: Count from database queries
- Email: Read-only
- Profile is public by default
