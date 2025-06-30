exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page
        //element locator
        this.username_textBox = page.getByRole('textbox', { name: 'Username' })
        this.password_textBox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Login' })
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
}