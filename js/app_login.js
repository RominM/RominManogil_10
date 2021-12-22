import { loader } from "./views/loader.js";
import { forgotPassLink } from "./views/V_Login/forgotPassLink.js";
import { loginForm } from "./views/V_Login/loginForm.js";

export const loginPage = (() => {  
   loader();
   loginForm();
   forgotPassLink();
})();