import ExternalLoginPage from "./ExternalLoginpage";
import InternalLoginPage from "./InternalLoginPage";
import LoginTestFlow from "./LoginTestFlow";


let internalLoginPage = new InternalLoginPage();
let externalLoginPage = new ExternalLoginPage();


let loginTestFlow = new LoginTestFlow();


loginTestFlow.login("xyz", "12345", internalLoginPage);
loginTestFlow.login("abc","4567",externalLoginPage);
