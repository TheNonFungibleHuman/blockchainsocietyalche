# Security Specification: Blocknauts LMS

## 1. Data Invariants
- A user profile must have a valid UID matching their Auth ID.
- XP must be a non-negative integer.
- The `role` field is immutable for standard users; only the bootstrap admin can grant admin status.
- `public_profiles` must strictly mirror public-only data (XP, Name, Country) to prevent PII leaks.

## 2. The "Dirty Dozen" (Attack Payloads)
I will test the following 12 payloads to ensure they are **denied**:
1. **Self-Promotion:** `{ role: 'admin' }` - Attempt to upgrade own role.
2. **Identity Theft:** `{ uid: 'target-uid' }` - Attempt to change UID to another user.
3. **XP Injection:** `{ xp: 99999 }` - Attempt to jump to the top of the leaderboard without valid progress.
4. **Email Hijack:** `{ email: 'admin@blocknauts.com' }` - Attempt to change own email to match an admin's.
5. **Ghost Field Injection:** `{ isVerified: true, fakeField: 'hack' }` - Injecting unauthorized fields into the user document.
6. **Negative Progress:** `{ xp: -100 }` - Attempt to corrupt another user's score (if read-only failed).
7. **Public Profile Scripting:** Injecting `<script>` tags into `displayName` or `country`.
8. **Large Payload Attack:** Sending a 1MB string into the `displayName` field to cause resource exhaustion.
9. **Creation Timestamp Spoof:** Sending a `createdAt` date from the future.
10. **Unauthorized Delete:** A regular user attempting to delete their own account or another's.
11. **Bulk List Scrape:** Attempting to query the entire `users` collection to find all emails.
12. **Metadata Tamper:** Attempting to change `welcomeWatched` status for another user.

## 3. The "Fortress" Defense Plan
- Use `hasOnlyAllowedFields` for every write.
- Use `isValidUser` to enforce types and string sizes (e.g., `displayName.size() <= 100`).
- Ensure `allow update` strictly checks that `resource.data.role == request.resource.data.role` (immutability).
