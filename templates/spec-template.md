# Spec Template

Use this template to create specifications for new features.

## Title
```
# Spec: <Feature Name>
```

## Sections

### Goal
One clear sentence describing what this feature accomplishes.

Example:
> Goal: Allow users to exchange cards with other users through a proposal system.

### User Stories
List stories in the format: "As a [user type], I want to [action] so that [benefit]."

Example:
- As a collector, I want to make exchange offers to other users so that I can complete my collection faster.
- As a seller, I want to set prices for my duplicate cards so that I can earn credits.

### Requirements
Functional and technical requirements.

Example:
- Users can create exchange offers with multiple cards
- System validates that offered cards are in user's inventory
- Exchange must be accepted by recipient

### Acceptance Criteria
Checkboxes for verification.

Example:
- [ ] Exchange offer created successfully
- [ ] Recipient receives notification
- [ ] Both inventories updated on acceptance

### Out of Scope
What this feature does NOT include.

Example:
- Payment processing
- Automated matching
- Offer expiration

### Notes / Assumptions
Any additional context.

Example:
- Requires authentication
- MVP: No counter-offers
- Future: Add offer history

---

## After Creating Spec

1. Product Agent uses spec to create task files
2. Task files reference back to spec
3. Developers use spec as requirements document
