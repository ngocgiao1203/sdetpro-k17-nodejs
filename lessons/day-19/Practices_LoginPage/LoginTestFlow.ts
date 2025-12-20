//Controller

import LoginPage from "./LoginPage";

export default class LoginTestFlow {
    
    //Tôi sẽ nhận vô 1 username as string, password as string, và 1 loginPage và type của nó phải là "IS-A LoginPage"
    public login(username: string, password: string, loginPage: LoginPage){
        loginPage.inputUsername(username);
        loginPage.inputPassword(password);
        loginPage.clickOnLoginBtn();
    }
}