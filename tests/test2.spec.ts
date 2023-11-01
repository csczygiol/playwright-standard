// @ts-check
import { expect, test } from '@playwright/test';

test('Login', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Practice Test Automation/);

    await page.getByRole('textbox', { name: 'Username' }).fill('student')
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123')
    await page.getByRole('button', { name: 'Submit' }).click()
});