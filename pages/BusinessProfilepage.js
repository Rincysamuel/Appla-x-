const { expect } = require("@playwright/test")
//const { TIMEOUT } = require("dns")

exports.BusinessProfilepage =
    class BusinessProfilepage {

        constructor(page) {

            this.page = page

            this.ok_button = "button.swal2-confirm"

            this.brandname = "//input[@id='brand_name']"

            this.no_of_employees = "//input[@id='employee_count']"

            this.yearsof_operation = "//input[@id='years_in_operation']"

            this.previousname = "//input[@id='previous_name']"

            this.businessname_changeddate_field = "//input[@id='previous_name_changed_on']"

            //this.selectdate_fromcalender = "//div[@data-value='1745389800']"

            this.select_businessactivity = "//select[@id='areas_of_business']"

            this.additional_businessactivity = "//textarea[@id='area_of_business_description']"

            this.select_countries = "//select[@id='areas_of_operation']"



            this.sourceOfWealth_toggle = "//*[contains(text(), 'Source of Wealth and Expected Turnover')]"

            this.sourceoffund_addnewbutton = "//a[@id='boof_drawer_button']"

            this.source_dropdown = "//select[@id='source_f']"

            this.amount = "//form[@id='boof_frm']//input[@id='amount']"

            this.countries = "//select[@id='actual_country1']"

            this.source_submitbutton = "//button[@class='submitBtn1 btn btn-dark mt-5']"



            this.sourceofwealth_addnewbutton = "//a[@id='bsow_drawer_button']"

            this.source_2 = "//select[@id='source_w']"

            this.amount_2 = "//form[@id='bsow_frm']//input[@id='amount']"

            this.countries_2 = "//select[@id='actual_country']"

            this.wealth_submitbutton = "//button[@id='submitButton1']"



            this.turnover_addnewbutton = "//a[@id='baet_drawer_button']"

            this.turnover_amount = "(//input[@id='amount'])[3]"

            this.turnover_submitbutton = "//form[@id='baet_frm']//button[@name='submit'][normalize-space()='Submit']"



            this.nextbutton = "//button[text()='Next ']"

            this.dialogbox = "//div[@id='swal2-html-container']"

            this.businessProfile_fieldvalidation = "//label[normalize-space()='This field is required.']"


        }



        async fillCompanyProfile() {

            await this.page.waitForSelector(this.ok_button, { state: 'visible' });
            await this.page.click(this.ok_button)
            await this.page.fill(this.brandname, "Cronin")
            await this.page.fill(this.no_of_employees, "500")
            await this.page.fill(this.yearsof_operation, "5")
            await this.page.fill(this.previousname, "LTXC")
            await this.page.click(this.businessname_changeddate_field)
            await this.page.waitForSelector(".caleran-days-container");
            const randomDay = Math.floor(Math.random() * 28) + 1;
            const dayElements = await this.page.locator(".caleran-days-container .caleran-day:not(.caleran-disabled)").all();
            for (const dayElement of dayElements) {
                const dayText = (await dayElement.textContent())?.trim();
                if (dayText === randomDay.toString()) {
                    await dayElement.click();
                    console.log("Selected date:", randomDay);
                    break;
                }
            }

            //await this.page.click(this.selectdate_fromcalender)
            await this.page.locator(this.select_businessactivity).selectOption("23")
            await this.page.fill(this.additional_businessactivity, "aerospace and construction")
            await this.page.locator(this.select_countries).selectOption(["1", "2", "3"])

        }

        async companyProfileValidations(){
            

            await this.page.waitForSelector(this.ok_button, { state: 'visible' });
            await this.page.click(this.ok_button)
            await this.page.waitForTimeout(3000)
            await this.page.click(this.nextbutton)
            const validation_text = await this.page.locator(this.businessProfile_fieldvalidation).textContent()
            const Total_validations = await this.page.locator(this.businessProfile_fieldvalidation).all();
            if (errors.length === 7) {
                console.log(' All 8 validation messages are displayed as expected.');
                console.log("validation message displayed is - "+validation_text)
            }
            expect(Total_validations.length).toBe(7);
        }

        async fillsourceOfWealth() {

            await this.page.click(this.sourceOfWealth_toggle)
            await this.page.click(this.sourceoffund_addnewbutton)
            await this.page.locator(this.source_dropdown).selectOption({ label: 'Bonus' });
            await this.page.fill(this.amount, "10000")
            await this.page.locator(this.countries).selectOption("144")
            await this.page.click(this.source_submitbutton)

            await this.page.click(this.sourceofwealth_addnewbutton)

            await this.page.locator(this.source_2).selectOption({ label: 'Private Investments' })
            await this.page.fill(this.amount_2, "50000")
            await this.page.locator(this.countries_2).selectOption("234")
            await this.page.click(this.wealth_submitbutton)

            await this.page.click(this.turnover_addnewbutton)
            await this.page.fill(this.turnover_amount, "100000")
            await this.page.click(this.turnover_submitbutton)

            await this.page.click(this.nextbutton)
            const actualmessage = await this.page.locator(this.dialogbox).textContent()
            const expectedmessage = "Business profile has been successfully saved."
            expect(actualmessage?.trim()).toBe(expectedmessage)

        }

    }
