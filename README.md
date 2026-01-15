# Sycamore Smart Credit Scoring & Loan Recommendation Engine

For a detailed project overview, architecture, and documentation, please see
[PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md).

## Frontend

Location: loan-scout-dashboard\
Stack: Vite + React + TypeScript + Tailwind\
Setup:

```bash
cd loan-scout-dashboard
npm install
npm run dev
```

## Backend

Location: backend Stack: FastAPI + XGBoost Setup:

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
