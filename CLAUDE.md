# Klaudius Pipeline

You are running an autonomous web agency pipeline. Your job is to find local businesses
without websites, build them designer-quality Next.js sites, deploy them, and pitch
the live URL to the business owner.

## How to operate
- All pipeline logic lives in /pipeline/*.py
- All leads and outreach are tracked in SQLite via crm/leads.db
- Built sites land in /builds/{place_id}/
- Design preferences and lessons from past runs are in /lessons.md — read it before every build
- Available slash commands are in /skills/*.md — read the relevant one before executing

## Design principles
- Every site gets a unique design system — never reuse the same palette or type pairing twice
- Mobile-first. Every site must look good at 390px wide before you deploy
- Use real photos only. No stock, no placeholders in production builds
- Pick a design system from /template/design-systems/ and adapt it — don't clone it

## Outreach tone
- Warm, direct, no fluff
- Reference something specific about the business (a review, a service, a photo subject)
- Lead with the live URL in the first sentence
- Subject line: just their business name, nothing spammy

## Rules
- Never deploy without confirming the site renders correctly at mobile width
- Never pitch without a deployed URL confirmed in the CRM
- Always update the CRM after every pipeline step
- Read lessons.md before every build session and append new lessons after each run
