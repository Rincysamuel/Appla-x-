import { test, expect } from '@playwright/test';


import { Adminloginpage } from '../pages/Adminloginpage';
import { Admindashboardpage } from '../pages/Admindashboardpage';
import { Loginpage } from '../pages/Loginpage';
import { Dashboardpage } from '../pages/Dashboardpage';

/*test('Verify Account status gets active after company approval by admin', async ({ page }) => {

    const login1 =  new Adminloginpage(page)
    await login1.goToAdminLoginPage()
    await login1.verifyAdminlogin('ajay.vr@seqato.com','U3lqi7dx')

    const dashboard = new Admindashboardpage(page)
    await dashboard.verifyCompanyApprovalByAdmin()

    //const userPage = await context.newPage();
    const login2 = new Loginpage(page)
    await login2.goToLoginPage()
    await login2.giveLoginCredentials('anandu.a@seqato.com','Anandu@123')

    const db = new Dashboardpage(page)
    await db.new_account_Status_after_AdminApproval()
    
})

test('Verify setting company maintanence fee', async ({ page }) => {

    const login =  new Adminloginpage(page)
    await login.goToAdminLoginPage()
    await login.verifyAdminlogin('ajay.vr@seqato.com','U3lqi7dx')

    const dashboard = new Admindashboardpage(page)
    await dashboard.verifyMaintanencefee()
    
})

test('Verify wallet creation for holding account', async ({ page }) => {

    const login =  new Adminloginpage(page)

    await login.goToAdminLoginPage()
    await login.verifyAdminlogin('ajay.vr@seqato.com','U3lqi7dx')


    const dashboard = new Admindashboardpage(page)
    await dashboard.verifyWalletcreation()  
    
})*/

test('Verify wallet creation and funding for AUD', async ({ page }) => {

    const login =  new Adminloginpage(page)

    await login.goToAdminLoginPage()
    await login.verifyAdminlogin('ajay.vr@seqato.com','U3lqi7dx')


    const dashboard = new Admindashboardpage(page)
    await dashboard.walletandFundingforAud()
    
})

/*test('Verify wallet creation for non holding account', async ({ page }) => {

    const login =  new Adminloginpage(page)
    await login.goToAdminLoginPage()
    await login.verifyAdminlogin('ajay.vr@seqato.com','U3lqi7dx')


    const dashboard = new Admindashboardpage(page)
    await dashboard.verifyWalletcreationforNonbase_currency()
    await dashboard.verifyvalidationforfundingFornonbasecurrency()
    
})

test('Verify creating wallet for all currencies', async ({ page }) => {

    const login =  new Adminloginpage(page)
    await login.goToAdminLoginPage()
    await login.verifyAdminlogin('ajay.vr@seqato.com','U3lqi7dx')

    const dashboard = new Admindashboardpage(page)
    await dashboard.createAndFundWalletsForAllCurrenciesRandomly()
   
    
})*/