import { test, expect } from '@playwright/test';

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    // create a new todo locator
    
    await page.goto('https://demo.playwright.dev/todomvc');

    await expect(page).toHaveURL('https://demo.playwright.dev/todomvc/#/');
    
  });
});


