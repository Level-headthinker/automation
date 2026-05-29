from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

router = APIRouter(tags=["Newsletter"])

# In-memory store for dev — replace with a real DB or Mailchimp/Brevo in production
_subscribers: set[str] = set()


class NewsletterRequest(BaseModel):
    email: EmailStr


@router.post("/newsletter")
async def subscribe(data: NewsletterRequest):
    email = str(data.email).lower()
    if email in _subscribers:
        return {"status": "already_subscribed"}
    _subscribers.add(email)
    print(f"[NEWSLETTER] New subscriber: {email}")
    return {"status": "subscribed"}
