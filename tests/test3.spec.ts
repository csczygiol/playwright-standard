require('dotenv').config();
// @ts-check
import { expect, test } from '@playwright/test';

test('Add Hamburger', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-exceptions/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Practice Test Automation/);

    // Use 'page.locator' to select elements by label (assuming 'label' is a valid selector on the page).
    await page.click('button:has-text("Add")', { timeout: 12000 }); //the page loads very slow so there is a timeout needed
    await page.locator('.input-field').fill('Hamburger');
    await page.locator('id="save_btn"').click();
    await expect(page).toHaveTitle(/Hamburger/)

});
