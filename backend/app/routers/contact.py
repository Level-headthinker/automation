from fastapi import APIRouter, BackgroundTasks, HTTPException
from pydantic import BaseModel, EmailStr, field_validator
from app.services.email import send_contact_notification, send_auto_reply

router = APIRouter(tags=["Contact"])


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    business: str = ""
    industry: str
    message: str = ""

    @field_validator("name", "industry")
    @classmethod
    def not_empty(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("This field is required")
        return v

    @field_validator("message")
    @classmethod
    def cap_message(cls, v: str) -> str:
        return v[:2000].strip()


@router.post("/contact")
async def submit_contact(
    data: ContactRequest, background_tasks: BackgroundTasks
):
    background_tasks.add_task(
        send_contact_notification,
        name=data.name,
        email=data.email,
        phone=data.phone,
        business=data.business,
        industry=data.industry,
        message=data.message,
    )
    background_tasks.add_task(send_auto_reply, name=data.name, to_email=data.email)

    return {"status": "ok", "message": "We'll be in touch within 2 hours."}
