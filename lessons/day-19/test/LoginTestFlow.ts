import LoginPage from "./LoginPage";

export default class LoginTestFlow{
    public login (username: string, password: string, loginPage: LoginPage){
        loginPage.inputUsername(username);
        loginPage.inputPassword(password);
        loginPage.clickOnLoginBtn();
    }
}