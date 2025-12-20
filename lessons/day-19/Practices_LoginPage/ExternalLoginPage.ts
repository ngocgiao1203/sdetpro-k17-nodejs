import LoginPage from "./LoginPage";

export default class ExternalLoginpage extends LoginPage{

    constructor(){
        super();
        this.usernameSel = "#ext-username";
        this.passwordSel = "#ext-password";
        this.loginBtnSel = "#ext-loginBtn";
    }
}

/**
 * Bạn hỏi tại sao ExternalLoginpage lại dùng super() trong khi LoginPage không có constructor?
 * Class con (ExternalLoginpage) luôn luôn phải gọi super() khi nó có constructor, 
 * ngay cả khi class cha (LoginPage) không khai báo constructor tường minh (explicit constructor).
 * 
 * 
 * Constructor của Class con PHẢI gọi super() trước khi sử dụng this.
 * 
 */