import { loginForm } from "./views/login/loginForm.js"
import { forgotPassLink } from "./views/login/forgotPassLink.js";
import { loader } from "./views/loader.js";

loader();
export const loginPage = (() => {
   
   loginForm();
   forgotPassLink();  
})();