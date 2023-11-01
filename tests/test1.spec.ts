// @ts-check
import { expect, test } from '@playwright/test';

test('go to page and click on Docs', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    await page.getByRole('link', { name: 'Docs' }).click()
});