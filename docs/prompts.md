# PromptBoard Workflow Prompts

This repo is designed to show two complementary frontend workflows from the article: image-guided design and browser-aware iteration.

## Image Generation Prompts

### Prompt 1: Hero illustration directions
```text
Generate 3 visual directions for a SaaS landing page hero image for a product called PromptBoard.
The product helps developers organize and test prompts for coding agents.

Style requirements:
- Modern
- Premium
- Dark mode friendly
- Subtle glassmorphism
- Feels like a real B2B developer tool
- Not cartoonish
- Clean composition
- Slight neon accents
- Suitable for a React / Next.js landing page

Return concepts that could work as:
1. Hero illustration
2. Product mood board
3. Dashboard atmosphere reference
```

### Prompt 2: Final hero visual
```text
Generate a premium dark-mode SaaS illustration for a developer productivity product.

Requirements:
- Wide aspect ratio for a website hero section
- Floating UI cards
- Prompt snippets, tags, and workflow nodes
- Deep navy and graphite background
- Emerald and violet accent lighting
- Realistic product-marketing look
- Minimal, not cartoonish
- Believable for a GitHub portfolio project
```

## How The Generated Assets Were Used
- `hero-concept-1.svg` acts as an alternate visual direction kept in the repo for transparency.
- `hero-concept-2.svg` is the primary landing-page hero image.
- `dashboard-mood.svg` is used as an atmosphere reference inside the dashboard detail surface.
- Matching `.png` files are included in `public/generated` so the repo keeps export-friendly asset names for GitHub packaging.

The code intentionally treats these images as design direction. The glass panels, accent colors, spacing density, and card depth on the site are aligned to those visuals rather than using them as isolated decorative assets.

## Browser-Aware Iteration Prompts

### Prompt 1: Dashboard inspection
```text
Run the PromptBoard app and inspect the /dashboard page in the browser.

Look for:
- Mobile layout issues
- Weak visual hierarchy
- Any controls that feel cramped or hard to use
- Areas where spacing, contrast, or alignment feel off

Then make targeted fixes.
Do not redesign the whole page.
Keep the dark premium aesthetic.
After changes, verify the page again in the browser.
```

### Prompt 2: Landing-page refinement
```text
Inspect the landing page with the generated hero asset visible.
Check whether the surrounding layout, spacing, and contrast support the image.
Improve polish without introducing a broad redesign.
Verify the hero, CTA hierarchy, and pricing section on both desktop and mobile widths.
```

## What Browser Inspection Changed
- Increased spacing in the dashboard header so search and title hierarchy stay readable.
- Used larger rounded controls and clearer chip contrast for mobile usability.
- Kept the detail panel and create form visible without overcrowding the main list.
- Structured the landing page so the generated hero asset feels integrated into the product story.

## What Was Still Verified Manually
- Keyboard focus visibility
- Responsive layout behavior
- Generated asset loading paths
- Secret hygiene before public push
