# PromptBoard Agent Guide

## Project Overview
PromptBoard is a GitHub portfolio demo built to show two GPT-5.4 / Codex-style frontend workflows:
- image-guided frontend design
- browser-aware UI iteration and verification

The app uses Next.js, TypeScript, Tailwind CSS, local mock data, and Playwright.

## Working Rules
- Preserve the established premium dark developer-tool aesthetic unless a redesign is requested.
- Prefer targeted, reviewable UI fixes over broad rewrites.
- After changing layout or interactivity, verify the affected flow in the browser.
- Check both desktop and mobile layouts when editing page structure.
- Keep controls accessible with visible focus states and keyboard support.
- Do not add dependencies unless they materially improve the demo.
- Never commit credentials, tokens, cookies, SSH keys, or auth artifacts.
- Keep the repo safe for a public GitHub push.

## Done Definition
Work is complete only when:
1. The requested UI or behavior is implemented.
2. The page renders without obvious layout regressions.
3. Interactive behavior is verified.
4. The result still matches the premium PromptBoard visual direction.
5. No secrets or machine-specific auth files are introduced into tracked files.
