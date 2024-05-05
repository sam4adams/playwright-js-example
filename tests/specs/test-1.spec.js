const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Google apps').click();
  await page.frameLocator('iframe[name="app"]').getByRole('link', { name: 'Gmail' }).click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('sadams@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByText('Couldn’t find your Google').click();
  await expect(page.getByText('Couldn’t find your Google')).toBeVisible();
});