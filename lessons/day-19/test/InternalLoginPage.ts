import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage{
    constructor(){
        super();
        this.userNameSel = "#username";
        this.passWordSel = "#password";
        this.loginBtnSel = "#loginBtn";
    }

}