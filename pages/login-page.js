const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page
        //element locator
        this.username_textBox = page.getByRole('textbox', { name: 'Username' })
        this.password_textBox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.alert_error = page.locator('#flash')
    }
    
    //method
    async goToLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password){
        await this.username_textBox.click();
        await this.username_textBox.fill(username);
        await this.password_textBox.click();
        await this.password_textBox.fill(password);
        await this.login_button.click();
    }

    async expectValidationMessage(expectedMsg) {
        const invalidMessage = this.alert_error;
        const usernameValidationField = this.username_textBox;
        const passwordValidationField = this.password_textBox;

        // Check visibility of error messages
        const messageVisible = await invalidMessage.isVisible();

        if (messageVisible) {
            // await expect(invalidMessage).toHaveText(expectedMsg, { timeout: 5000 });

            const errorLocator = this.page.locator('#flash');
            await expect(errorLocator).toBeVisible(); // ensure it's visible before getting content

            const actualText = await errorLocator.innerText();
            const normalized = actualText.replace(/\s+/g, ' ').trim(); // collapse extra spaces
            expect(normalized).toBe(expectedMsg);

        } else {
            throw new Error('No error message found on notification error.');
        }

        // Also check validation message on the input element
        const msgUsername = await usernameValidationField.evaluate((el) => el.validationMessage);
        expect(msgUsername).toBe(expectedMsg);
        const msgPassword = await passwordValidationField.evaluate((el) => el.validationMessage);
        expect(msgPassword).toBe(expectedMsg);
    }
}