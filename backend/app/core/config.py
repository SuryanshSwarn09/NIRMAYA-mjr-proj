"""Core configuration and settings for NIRMAYA API."""
from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    PROJECT_NAME: str = "NIRMAYA"
    PROJECT_FULL_NAME: str = "Networked Interoperable Records Medical Assets & Your Archives"
    VERSION: str = "0.1.0"
    API_V1_STR: str = "/api/v1"
    
    # CORS Configuration
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]
    
    # Database Configuration
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/nirmaya"
    
    # Supabase JWT Configuration
    SUPABASE_URL: str = ""
    SUPABASE_KEY: str = ""
    SUPABASE_JWT_SECRET: str = "your-supabase-jwt-secret-here"
    
    class Config:
        case_sensitive = True
        env_file = ".env"


settings = Settings()
