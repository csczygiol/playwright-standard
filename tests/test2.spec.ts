require('dotenv').config();
// @ts-check
import { expect, test } from '@playwright/test';

test('Login', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Practice Test Automation/);

    const username = process.env.T_USERNAME || '';
    const password = process.env.T_PASSWORD || '';

    // Use 'page.locator' to select elements by label (assuming 'label' is a valid selector on the page).
    await page.locator('label:has-text("Username") + input').fill(username);
    await page.locator('label:has-text("Password") + input').fill(password);
    await page.locator('button:has-text("Submit")').click();
});
