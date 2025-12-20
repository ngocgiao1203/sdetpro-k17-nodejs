import LoginPage from "./LoginPage";

export default class ExternalLoginPage extends LoginPage{
    constructor(){
        super();
        this.userNameSel = "#ext-username";
        this.passWordSel = "#ext-password";
        this.loginBtnSel = "#ext-loginBtn";
    }
}