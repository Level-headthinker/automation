---
title: "How We Built a Chatbot That Speaks English, Urdu, and Roman Urdu"
slug: "multilingual-ai-chatbot-urdu"
excerpt: "Building a multilingual AI for Pakistani patients wasn't just a translation problem. It was a cultural problem, a code-switching problem, and a trust problem. Here's how we solved it."
date: "2026-05-24"
readTime: "7 min read"
category: "Product & Technology"
coverGradient: "from-violet-600 to-cyan-500"
---

## The Problem With "Just Translate It"

When we started building ClinicBot, the obvious solution to multilingual support was obvious: use a translation layer. Patient sends a message in Urdu → translate to English → process → translate response back to Urdu. Done.

We tried it. It failed immediately.

Not because the translation was wrong. The translations were technically accurate. They failed because **Pakistani patients don't communicate in clean, translatable Urdu or clean, translatable English**. They communicate in a fluid mix of both — Roman Urdu, Urdu script, English medical terms, and Arabic phrases — often in the same sentence.

A message like *"mere bache ko bukhar hai, kya Dr. Ahmed kal available hain?"* is Roman Urdu. It cannot be translated reliably via a generic translation layer. It needs to be understood natively.

---

## What Pakistani Patient Language Actually Looks Like

Here are real examples of how Pakistani patients write when they need a doctor:

**English:** "Hi, I need to book an appointment for a skin issue"  
**Urdu script:** "مجھے ڈاکٹر سے ملنا ہے، کل کوئی وقت ہے؟"  
**Roman Urdu:** "bhai mere ghutnay mein dard hai, koi doctor hai?"  
**Mixed:** "Doctor sahab se appointment chahiye, next week available hain?"

A single WhatsApp number for a clinic in Karachi might receive all four of these formats in the same hour, from patients in the same neighbourhood.

A chatbot that handles only one of these is useless in practice, even if it looks good in a demo.

---

## The Architecture We Built

### Layer 1: Language Detection

Before anything else, we needed to know what language the patient was using — not at a coarse level, but at a nuanced one.

We built a custom detection system with three possible outputs:
- **`en`** — English
- **`ur`** — Urdu script  
- **`ur-roman`** — Roman Urdu (Urdu concepts, Latin script)

The tricky part was Roman Urdu. Words like "appointment", "doctor", "timing", and "number" appear in both English and Roman Urdu contexts. A patient writing "doctor se appointment chahiye" is not writing English — they're writing Roman Urdu that happens to contain English loanwords.

Our detection uses a combination of strong signal words (words that are exclusively Roman Urdu) and weak signal words (words that might be Roman Urdu but need corroboration). Two or more weak signals, or one strong signal, confirms Roman Urdu.

### Layer 2: Language-Locked Responses

Once we know the language, the AI is locked to respond in that language only. This sounds simple but required significant prompt engineering to enforce reliably with a small language model (we use LLaMA 3.1 8B via Groq).

Small models have a strong tendency to "drift" — if a patient writes in Roman Urdu but mentions an English term, the model might start responding in English. We solved this with a dual-lock system: a language instruction at the beginning of the system prompt AND a language enforcement reminder injected as the final message before the model generates its response.

### Layer 3: Pakistani Urdu, Not Bollywood Hindi

This was the subtlest challenge. When we first enabled Roman Urdu responses, the model responded with vocabulary that was technically correct Urdu but culturally wrong for a Pakistani patient.

Words like *"dhanyawad"* (thanks), *"namaste"*, *"swagat"* (welcome), and *"kripa"* (please) are standard Bollywood Hindi — they sound jarring and slightly foreign to Pakistani ears. The correct Pakistani equivalents are *"shukriya"*, *"assalamu alaikum"*, *"khush aamdeed"*, and *"meherbani"*.

We explicitly trained the prompt to avoid the Bollywood vocabulary list and use Pakistani Urdu alternatives for every common interaction phrase.

---

## Emergency Handling Across Languages

One of the most critical requirements for any healthcare chatbot is emergency detection. A patient writing *"seena dard ho raha hai"* (chest pain) in Roman Urdu needs the same immediate response as someone writing "chest pain" in English.

We maintain an emergency keyword list in all three supported languages and dialects, including:

- English: "chest pain", "can't breathe", "unconscious", "heart attack"
- Roman Urdu: "seena dard", "saans nahi aa raha", "behosh", "dil ka dorah"  
- Urdu script: "سینے میں درد", "سانس نہیں", "بے ہوش"

When any of these are detected, the AI skips all other logic and immediately responds with the emergency message in the patient's language, directing them to call 1122 (Pakistan's emergency number) and go to the nearest emergency room.

This check runs **before** the LLM call — not after. We cannot rely on a language model to reliably detect emergencies 100% of the time.

---

## What This Means for Clinics

The practical result for a clinic using ClinicBot is that they can display one WhatsApp number and one website widget — and every patient who reaches out is met in their own language without any configuration required.

A patient in Karachi who types in Roman Urdu gets a warm, natural response in Roman Urdu. A patient in a diaspora clinic in London who types in English gets an English response. A patient's grandmother who writes in Urdu script gets a proper Urdu script response.

No translation lag. No awkward hybrid responses. No cultural mismatch.

---

## What We Are Still Improving

Multilingual AI is not a solved problem. Here is what we are actively working on:

**Dialect variation:** Roman Urdu varies significantly by region. Karachi Roman Urdu differs from Lahori Roman Urdu in vocabulary and tone. We are building regional awareness into the language model.

**Urdu number recognition:** Pakistani patients often write phone numbers in a mix of Eastern Arabic numerals (۰۱۲۳...) and Western numerals. Our phone extraction system currently handles both, but edge cases still occasionally fail.

**Mixed-script messages:** Some patients write in both Urdu script and Roman Urdu in the same message. Our current system takes the first detected script as the primary — this works in most cases but will be improved with a more granular approach.

---

## The Bigger Point

Language is not a feature. For a healthcare AI operating in Pakistan, language is the foundation of trust. A patient who receives a response that feels foreign, stiff, or culturally mismatched will not book. They will leave.

Getting language right is not a nice-to-have. It is the difference between a chatbot that converts patients and one that confuses them.

We built ClinicBot for Pakistani patients first — not as an English product translated later. That decision shapes everything about how it works.

---

*Interested in how ClinicBot handles your specific patient language mix? [Book a demo](/#contact) and we'll show you a live conversation in English, Roman Urdu, and Urdu script.*
