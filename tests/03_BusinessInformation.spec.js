import { test, expect } from '@playwright/test';

import { Loginpage } from '../pages/Loginpage';
import { Dashboardpage } from '../pages/Dashboardpage';
import { BusinessInformationpage } from '../pages/BusinessInformationpage';
import { BusinessProfilepage } from '../pages/BusinessProfilepage';
import { PurposeOfAccountpage } from '../pages/PurposeOfAccountpage';
import { BusinessOfficialspage } from '../pages/BusinessOfficialspage';
import { DocumentUploadpage } from '../pages/DocumentUploadpage';
import { RegisterCompanypage } from '../pages/RegisterCompanypage';




test('Verify onboarding for new company', async ({ page }) => {


  const login = new Loginpage(page)
  await login.goToLoginPage()
  await login.giveLoginCredentials('rincy.samuel+1@seqato.com','Rincy@123')

  const dashboard =  new Dashboardpage(page)
  await dashboard.appla_x_title()

  await dashboard.clickOnRegister_a_company()

 // await dashboard.clickOnCompleteKyc()
  const register = new RegisterCompanypage(page)
  await register.newCompanyRegistration('India')

  await dashboard.clickOnCompleteKyc()

  const bus_inf = new BusinessInformationpage(page)
  await bus_inf.fillCompanyDetails()

  await bus_inf.fillCompanyAddress()

  await bus_inf.completeSelfCertification()

  const bus_profile = new BusinessProfilepage(page)
  await bus_profile.fillCompanyProfile()
  await bus_profile.fillsourceOfWealth()
  

  const poa = new PurposeOfAccountpage(page)
  await poa.fillMulticurrencyAccounts_EmptyFieldvalidation()
  //await poa.fillMulticurrencyAccounts()

  /*const bus_official = new BusinessOfficialspage(page)
  await bus_official.fillBusinessofficialdetails()

  const doc_upload = new DocumentUploadpage(page)
  await doc_upload.uploadCompanyDocumentsForKyc()
  await doc_upload.uploadIndividualDocumentsforKyc()
  */

})