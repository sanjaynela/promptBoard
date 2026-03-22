import { devices, expect, test } from "@playwright/test";

test.describe("PromptBoard", () => {
  test("landing page renders hero and pricing", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: /build prompt systems that survive longer than one good afternoon/i,
      }),
    ).toBeVisible();

    await expect(page.getByRole("link", { name: /explore dashboard/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /enough product structure to make the repo feel publishable/i })).toBeVisible();
  });

  test("dashboard supports filtering and detail inspection", async ({ page }) => {
    await page.goto("/dashboard");

    await expect(page.getByRole("heading", { name: /prompt library/i })).toBeVisible();
    await page.getByRole("button", { name: /rewrite the landing hero for a sharper cta/i }).click();
    await page.getByPlaceholder(/search prompts, tags, or details/i).fill("landing");
    await expect(
      page.getByRole("complementary").getByRole("heading", { name: /rewrite the landing hero for a sharper cta/i }),
    ).toBeVisible();
  });

  test("create form validates and adds a prompt", async ({ page }) => {
    await page.goto("/dashboard");

    await page.locator("form").evaluate((form: HTMLFormElement) => form.requestSubmit());
    await expect(page.getByText(/title, description, and prompt body are required/i)).toBeVisible();

    await page.getByLabel("Title").fill("Inspect tablet layout overflow");
    await page.getByLabel("Description").fill("Find any tablet-width wrapping issues in the dashboard.");
    await page.getByLabel("Prompt body").fill("Check the dashboard at tablet widths and fix only overflow and spacing issues.");
    await page.getByRole("button", { name: /add prompt/i }).click();

    await expect(
      page.getByRole("complementary").getByRole("heading", { name: /inspect tablet layout overflow/i }),
    ).toBeVisible();
  });

  test("mobile dashboard keeps key controls visible", async ({ browser }) => {
    const context = await browser.newContext({
      ...devices["iPhone 13"],
    });
    const page = await context.newPage();

    await page.goto("/dashboard");
    await expect(page.getByPlaceholder(/search prompts, tags, or details/i)).toBeVisible();
    await expect(page.getByRole("button", { name: "all" })).toBeVisible();
    await expect(page.getByRole("heading", { name: /draft a new workflow card/i })).toBeVisible();
  });
});
