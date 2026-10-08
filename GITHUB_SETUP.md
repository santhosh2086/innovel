# INNOVEL GitHub / Render Setup

## Backend
The backend is in `backend/`.

Install and run locally:

```bash
cd backend
npm install
npm run dev
```

## Environment variables
Do not commit `backend/.env`. Use `backend/.env.example` as the template.

For Render, add the required environment variables in the service's Environment settings.

## PostgreSQL
Set `DATABASE_URL` to the production PostgreSQL connection string and set `DATABASE_SSL` according to the provider.

## Google Sheets
Set `GOOGLE_SHEETS_WEBHOOK_URL` and `GOOGLE_SHEETS_SECRET` in the deployment environment.
