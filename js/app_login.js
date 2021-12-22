import { loader } from "./views/loader.js";
import { forgotPassLink } from "./views/V_Login/forgotPassLink.js";
import { loginForm } from "./views/V_Login/loginForm.js";
import { signIn } from "./views/V_Login/signIn.js";

export const loginPage = (() => {  
   loader();
   signIn();
   loginForm();
   forgotPassLink();
})();
