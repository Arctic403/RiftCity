# RiftCity — Developer setup

This branch adds a minimal V1 scaffold (frontend + backend + DB) and seed data for local development.

Quick start:

1) Requirements: Node 18+, Docker
2) Start the database:
   docker-compose up -d

3) Backend:
   cd backend
   npm install
   export DATABASE_URL="postgresql://riftcity:riftcity@localhost:5432/riftcity"
   npx prisma generate
   npx prisma migrate dev --name init
   npm run seed
   npm run dev

4) Frontend:
   cd frontend
   npm install
   npm run dev

The backend listens on http://localhost:4000 and exposes /api/health for now.

Next steps:
- Implement auth, character endpoints, jobs, combat, inventory.
- Add CI, linting, and tests.
