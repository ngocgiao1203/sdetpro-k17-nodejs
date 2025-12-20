export default class LoginPage{

    protected userNameSel: string = "";
    protected passWordSel: string = "";
    protected loginBtnSel: string = "";

    public inputUsername(username: string){
        this.userNameSel = username;
        console.log(`Input username for selector: ${this.userNameSel}`);
    }

    public inputPassword(password: string){
        this.passWordSel = password; 
        console.log(`Input password for selector: ${this.passWordSel}`);
    }

    public clickOnLoginBtn(){
        console.log(`Click on Login button for selector: ${this.loginBtnSel}`);        
    }
}