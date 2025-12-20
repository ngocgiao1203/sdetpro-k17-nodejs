import ExternalLoginpage from "./ExternalLoginPage";
import InternalLoginpage from "./InternalLoginPage";
import LoginTestFlow from "./LoginTestFlow";

let internalLoginpage = new InternalLoginpage();
let externalLoginPage = new ExternalLoginpage();

let loginTestFlow = new LoginTestFlow();

//Test InternalLoginPage
loginTestFlow.login("teocodon","neverknow", internalLoginpage);

//Test ExternalLoginpage
loginTestFlow.login("tidaohoa", "everyoneknow", externalLoginPage);