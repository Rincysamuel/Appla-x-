import { test, expect } from '@playwright/test';

import { Loginpage } from '../pages/Loginpage';
import { Dashboardpage } from '../pages/Dashboardpage';

test('Verify login with valid credentials', async ({ page }) => {

  const login = new Loginpage(page)
  await login.goToLoginPage()
  await login.giveLoginCredentials('anandu.a@seqato.com','Anandu@123')

  const dashboard =  new Dashboardpage(page)
  await dashboard.appla_x_title()
  await page.waitForTimeout(3000)


})

test('Verify login with Invalid credentials', async ({ page }) => {

  const login = new Loginpage(page)
  await login.goToLoginPage()
  await login.giveLoginCredentials('anandu@seqato.com','Anandu@12345')
  await login.loginerror()


})

test('Verify validations for login', async ({ page }) => {

  const login = new Loginpage(page)
  await login.goToLoginPage()
  await login.loginWithEmptyCredentials()

})

test('Verify new user registration and login', async ({ page }) => {

  const login = new Loginpage(page)
  await login.goToLoginPage()
  await login.registration_And_Login_of_newUser()
 

})

test('Verify new user registration and login with empty data', async ({ page }) => {

  const login = new Loginpage(page)
  await login.goToLoginPage()
  await login.registration_And_Login_of_newUser_With_EmptyData()
 

})

test('Verify new user registration with invalid emailid', async ({ page }) => {

  const login = new Loginpage(page)
  await login.goToLoginPage()
  await login.NewUser_Registration_With_InvalidEmailID()

})

test('Verify new user registration with special character check in the firstname and lastname field', async ({ page }) => {

  const login = new Loginpage(page)
  await login.goToLoginPage()
  await login.NewUser_Registration_With_SpecialCharacters_Firstname_Lastname()

})

test('Verify new user registration with different Password in the repeat password field', async ({ page }) => {

  const login = new Loginpage(page)
  await login.goToLoginPage()
  await login.NewUser_Registration_With_PasswordMistmach()

})
test('Verify new user registration with existing user details', async ({ page }) => {

  const login = new Loginpage(page)
  await login.goToLoginPage()
  await login.registration_And_Login_of_Existinguserdetils()

})

test('Verify Forgot password page redirection', async ({ page }) => {

  const login = new Loginpage(page)
  await login.goToLoginPage()
  await login.forgot_password_Redirection()

})
test('Verify Terms and condition without checking the box', async ({ page }) => {

  const login = new Loginpage(page)
  await login.goToLoginPage()
  await login.NewUser_Registration_Without_TermsandCondition()

})