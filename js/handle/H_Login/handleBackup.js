import { infoByEmail } from "../../views/V_Login/createModal.js";

export const handleBackup = (e) => {
   console.log('coucou');

   const backupInp = document.querySelector('.check-inp-backup');
   const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (!backupInp.value.match(emailReg)) {
      e.preventDefault();

      backupInp.parentNode.setAttribute("data-error-visible", true);
   } else {
      backupInp.parentNode.setAttribute("data-error-visible", false);
      infoByEmail();
   }
}