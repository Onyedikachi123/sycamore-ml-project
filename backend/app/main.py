from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import credit, financial_health, asset_management

app = FastAPI(
    title="Sycamore Credit & Asset Intelligence Platform",
    description="Production-grade Fintech ML Platform",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(credit.router, prefix="/api/credit", tags=["Credit"])
app.include_router(financial_health.router, prefix="/api/financial-health", tags=["Financial Health"])
app.include_router(asset_management.router, prefix="/api/asset-management", tags=["Asset Management"])

@app.get("/")
def health_check():
    return {"status": "healthy", "service": "Sycamore Backend"}
