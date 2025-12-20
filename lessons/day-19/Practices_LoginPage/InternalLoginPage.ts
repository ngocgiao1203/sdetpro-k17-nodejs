import LoginPage from "./LoginPage";

export default class InternalLoginpage extends LoginPage{

    constructor(){
        super();
        this.usernameSel = "#username";
        this.passwordSel = "#password";
        this.loginBtnSel = "#loginBtn";
    }
}