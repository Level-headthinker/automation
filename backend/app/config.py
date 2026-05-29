from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    CORS_ORIGINS: str = "http://localhost:3000,http://127.0.0.1:3000"
    MAIL_EMAIL: str = ""
    MAIL_PASSWORD: str = ""
    ADMIN_EMAIL: str = ""
    ENVIRONMENT: str = "development"

    @property
    def cors_origins(self) -> list[str]:
        return [o.strip() for o in self.CORS_ORIGINS.split(",") if o.strip()]


settings = Settings()
