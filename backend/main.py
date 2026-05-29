from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.routers import contact, newsletter

app = FastAPI(
    title="Tapzero Website API",
    description="Backend for the Tapzero company website",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Accept"],
)

app.include_router(contact.router)
app.include_router(newsletter.router)


@app.get("/")
def root():
    return {"service": "Tapzero Website API", "status": "running"}


@app.api_route("/health", methods=["GET", "HEAD"])
def health():
    return {"status": "healthy"}
