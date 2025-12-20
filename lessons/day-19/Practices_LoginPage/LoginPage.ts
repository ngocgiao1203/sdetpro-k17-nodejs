export default class LoginPage {

    protected usernameSel: string = "";
    protected passwordSel: string = "";
    protected loginBtnSel: string = "";

    public inputUsername(username: string){
        console.log(`Input username for selector: ${this.usernameSel}`);  
    }

    public inputPassword(password: string){
        console.log(`Input password for selector: ${this.passwordSel}`);  
    }

    public clickOnLoginBtn(){
        console.log(`Click on Login button for selector: ${this.loginBtnSel}`);
        
    }
}