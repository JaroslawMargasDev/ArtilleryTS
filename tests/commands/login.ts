// @ts-check
import { expect, Page } from '@playwright/test';

export async function testLogin( page: Page )
{
  await page.goto('https://commitquality.com/');
  await page.getByTestId('navbar-login').click();
  await page.getByTestId('username-textbox').fill('test');
  await page.getByTestId('password-textbox').fill('test');
  await page.getByTestId('login-button').click();
  await expect(page.getByTestId('navbar-logout')).toBeVisible();
}