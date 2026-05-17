# Porter Finance

Porter Finance is a Mantle-native personal CFO agent that converts financial intent into policy-safe wallet actions.

## Apps

- `apps/api`: VPS-hosted API
- `apps/worker`: VPS-hosted background processor
- `apps/web`: Vercel-hosted frontend

## Core workflow

1. Capture user goals and constraints
2. Generate a bounded wallet policy
3. Propose cash, yield, and rebalance actions
4. Route risky moves into approval workflows
5. Persist decisions and execution history on-chain

## Local development

1. Run the shared infrastructure in `../shared-infra`
2. Create a PostgreSQL database named `porter_finance`
3. Apply `apps/api/db/schema.sql`
4. Apply `apps/api/db/seed.sql`
5. Install dependencies with `npm install`
6. Start each app:
   - `npm run dev:api`
   - `npm run dev:worker`
   - `npm run dev:web`

## Production notes

- API and worker are VPS-ready through Docker
- frontend remains Vercel-oriented
- PostgreSQL is the source of truth for policies, plans, approvals, and admin audit logs
- smart contract registry skeletons live in `contracts/`
