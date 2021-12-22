import { handleForm } from "../../handle/H_Login/handlerForm.js";

export const loginForm = () => {
   const container = document.querySelector('.login-form');

   const form = document.createElement('form');
   form.setAttribute('action', './html/dashboard.html?');
   form.setAttribute('methode','POST');

   const errorEmail = document.createElement('div');
   errorEmail.classList.add('form-data');
   errorEmail.setAttribute('data-error','Veuillez renseigner le champs email au format : exemple@email.fr');
   errorEmail.setAttribute('data-error-visible', false);

   const labEmail = document.createElement('label');
   labEmail.setAttribute('for', 'email');
   labEmail.innerHTML = 'Email';
   const inpEmail = document.createElement('input');
   inpEmail.classList.add('text-control')
   inpEmail.setAttribute('data-error','ERROR');
   inpEmail.type = 'email';
   inpEmail.id = 'inp-email';
   inpEmail.name = 'email';

   const errorPass = document.createElement('div');
   errorPass.classList.add('form-data');
   errorPass.setAttribute('data-error','Veuillez saisir votre mot de passe');
   errorPass.setAttribute('data-error-visible', false);

   const labPass = document.createElement('label');
   labPass.setAttribute('for', 'password');
   labPass.innerHTML = 'Mot de passe';
   const inpPass = document.createElement('input');
   inpPass.classList.add('text-control')
   inpPass.setAttribute('data-error','ERROR');
   inpPass.type = 'password';
   inpPass.id = 'inp-password';
   inpPass.name = 'email';

   const btnSub = document.createElement('button');
   btnSub.type = 'submit';
   btnSub.classList.add('btn-login');
   btnSub.innerHTML = 'Se connecter';
   


   container.append(form);

   errorEmail.append(labEmail, inpEmail);
   errorPass.append(labPass, inpPass);

   form.append(errorEmail, errorPass, btnSub);

   handleForm();
};
