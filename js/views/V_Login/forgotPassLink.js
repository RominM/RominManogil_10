import { createModal } from "./createModal.js";

export const forgotPassLink = () => {
   const container = document.querySelector('.login-form');

   const forgotLink = document.createElement('button');
   forgotLink.classList.add('forgot-password');
   forgotLink.innerHTML = 'Mot de passe oublié';

   container.append(forgotLink);

   forgotLink.addEventListener('click', createModal);
};
