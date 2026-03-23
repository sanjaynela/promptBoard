# PromptBoard

PromptBoard is a fictional developer-tool product built to demonstrate two GPT-5.4 / Codex-style frontend workflows in one publishable repo:

1. Image-guided frontend design
2. Browser-aware UI iteration and verification

The app combines a polished marketing page with an interactive prompt dashboard so the repo can show both visual direction and real browser-level interaction.

## Live Demo
[promptboard-omega.vercel.app](https://promptboard-omega.vercel.app)

## What This Repo Demonstrates
- A premium dark-mode SaaS landing page for a developer product
- A dashboard for saving, filtering, inspecting, and drafting prompts
- Generated design assets that shape visual direction instead of acting as random decoration
- Browser-aware iteration that focuses on the rendered UI, not just source code changes
- Playwright coverage for key landing and dashboard flows
- Repo-level instructions for future agent work in `AGENTS.md`

## The Two Workflows
### 1. Image-guided frontend design
- What it is: using generated visuals as art direction for the interface
- What problem it solves: the page works structurally, but still feels generic or visually undecided
- When to use it: before implementation is finished, or when the UI needs a clearer aesthetic direction
- Primary input: image prompts, concept directions, mood references
- Primary output: layout mood, composition cues, visual language, and hero/dashboard atmosphere
- Where it appears in PromptBoard: [`public/generated`](/Users/sanjay/personalProjects/promptBoard/public/generated), the landing hero in [`app/page.tsx`](/Users/sanjay/personalProjects/promptBoard/app/page.tsx), and [`docs/prompts.md`](/Users/sanjay/personalProjects/promptBoard/docs/prompts.md)

### 2. Persistent computer-use / browser-aware iteration
- What it is: inspecting the real running UI in the browser and fixing what feels off
- What problem it solves: the code looks fine, but the rendered experience still has spacing, hierarchy, responsiveness, or usability issues
- When to use it: after the interface exists and can be opened, clicked, resized, and checked on real viewports
- Primary input: the running app, route-specific inspection prompts, clickable states, mobile and desktop layouts
- Primary output: targeted UI fixes plus confirmation that the rendered result actually improved
- Where it appears in PromptBoard: [`app/dashboard/page.tsx`](/Users/sanjay/personalProjects/promptBoard/app/dashboard/page.tsx), [`AGENTS.md`](/Users/sanjay/personalProjects/promptBoard/AGENTS.md), and [`tests/promptboard.spec.ts`](/Users/sanjay/personalProjects/promptBoard/tests/promptboard.spec.ts)

## How They Work Together
Image generation helps decide what the interface should feel like before the design is fully convincing. Persistent computer-use helps test whether the real implementation actually delivers that feeling once the UI exists in the browser. In PromptBoard, the landing page is the clearest example of visual direction, while the dashboard and Playwright coverage are the clearest examples of rendered verification and iteration.

## Use This Workflow In Any Frontend Project
### Start with image generation when the problem is visual direction
Use this workflow when the interface is structurally fine but still feels generic, flat, or visually uncommitted. Typical signs are a hero section that lacks identity, a dashboard that feels sterile, or a product page that works but does not yet feel intentional.

Ask for:
- layout mood
- lighting and contrast
- composition
- card depth
- dashboard atmosphere
- realistic product aesthetic

Reusable prompt template:
```text
Generate 3 visual directions for a frontend interface for [product/project].
The product helps [target user] do [job].

Style requirements:
- [visual goals]
- [platform constraints]
- [tone constraints]

Return concepts that could work as:
1. Hero visual
2. Product mood board
3. Dashboard/interface reference
```

### Use persistent computer-use once the app exists in the browser
Use this workflow when the implementation is already running and the real UI needs inspection. Typical signs are cramped controls, weak hierarchy, broken mobile spacing, awkward wrapping, or a page that looks acceptable in code but wrong in the browser.

Ask the agent to:
- run the app
- inspect a specific route
- click and interact with controls
- check both mobile and desktop behavior
- make targeted fixes
- verify the page again in the browser

Reusable prompt template:
```text
Run the app and inspect [route] in the browser.

Look for:
- mobile layout issues
- weak visual hierarchy
- cramped or hard-to-use controls
- spacing, contrast, or alignment issues

Make targeted fixes only.
Do not redesign the whole page.
Verify the result again in the browser.
```

### Rule of thumb for choosing between them
- If the problem is taste or visual direction, start with image generation.
- If the problem is rendered behavior or polish, start with browser inspection.
- If both are true, use image generation first and browser-aware iteration second.

### What still needs human judgment
Generated visuals are references, not truth. Browser interaction is useful, but it is not a substitute for product judgment. Explicit prompts, repo guidance, and real tests still matter if you want the result to hold up after the demo.

## Stack
- Next.js
- TypeScript
- Tailwind CSS
- Lucide React
- Playwright

## Local Setup
```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) for the landing page and [http://localhost:3000/dashboard](http://localhost:3000/dashboard) for the interactive app surface.

## Test Commands
```bash
npm run lint
npm run test:e2e
```

## Deploying On Vercel
PromptBoard is deployment-ready for the free Vercel Hobby plan.

### Fastest path
1. Sign in to [Vercel](https://vercel.com/) with GitHub.
2. Import `sanjaynela/promptBoard`.
3. Keep the default Next.js build settings.
4. Deploy from the `main` branch.

### CLI path
```bash
vercel login
vercel
vercel --prod
```

The app does not require environment variables for the current demo version.

Note: the current production deployment is live at [promptboard-omega.vercel.app](https://promptboard-omega.vercel.app).

### Post-deploy checks
- Confirm `/` loads correctly.
- Confirm `/dashboard` loads correctly.
- Confirm the assets in `public/generated` render in production.
- Confirm search, filters, detail view, and in-session prompt creation still work.
- Confirm the mobile layout remains usable.

## Workflow Assets And Prompt References
- Image-guided design assets: [`public/generated`](/Users/sanjay/personalProjects/promptBoard/public/generated)
- PromptBoard-specific prompt examples: [`docs/prompts.md`](/Users/sanjay/personalProjects/promptBoard/docs/prompts.md)
- Browser-verification guidance for future agent work: [`AGENTS.md`](/Users/sanjay/personalProjects/promptBoard/AGENTS.md)
- Regression coverage for interactive flows: [`tests/promptboard.spec.ts`](/Users/sanjay/personalProjects/promptBoard/tests/promptboard.spec.ts)

## Screenshots
![Landing page preview](./public/screenshots/landing-page.png)
![Dashboard preview](./public/screenshots/dashboard-page.png)

## Why This Repo Exists
This project turns the article’s PromptBoard idea into a concrete frontend experiment. It is meant to show how coding agents can help with:
- visual direction before an interface feels finished
- rendered inspection after the implementation exists
- repeatable verification before the project is published

## Notes
- This repo uses only mock data.
- No credentials or machine-specific auth material should ever be committed.
- The git author identity for personal projects can be configured locally with [`setup-personal-git.sh`](/Users/sanjay/personalProjects/setup-personal-git.sh).
- The recommended free deployment target for this repo is Vercel Hobby.
