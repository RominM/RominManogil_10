import { getConnected } from "./../dashboard/getConnected.js";

export const loginForm = () => {
   const container = document.querySelector('.login-form');

   const form = document.createElement('form');
   form.setAttribute('action', './html/dashboard.html?');
   form.setAttribute('methode','POST');

   const errorEmail = document.createElement('div');
   errorEmail.classList.add('form-data');
   errorEmail.setAttribute('data-error','Veuillez renseigner le champs email');
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

   validForm();
};

const validForm = () => {

   let state = {
      email: {
         data: '',
         status: false
      },
      password: {
         data: '',
         status: false
      }
   };

   const btnSub = document.querySelector('.btn-login');
   btnSub.addEventListener('click', (e) => {

      const checkEmail = () => {
         const inpEmail = document.querySelector('#inp-email');
         const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

         if (!inpEmail.value.match(emailReg)) {
            e.preventDefault();

            state.email.status = false;
            inpEmail.parentNode.setAttribute("data-error-visible", true);
         } else {
            inpEmail.parentNode.setAttribute("data-error-visible", false);
            state.email.status = true;
         }
      };

      const checkPassword = () => {
         const inpPass = document.querySelector('#inp-password');

         if (inpPass.value.length <= 3) {
            e.preventDefault();

            inpPass.parentNode.setAttribute('data-error-visible', true);
            state.password.status = false;
         } else {
            inpPass.parentNode.setAttribute('data-error-visible', false);
            state.password.status = true;
         };
      };

      const globalCheck = () => {
         var isValide = false;

         for (let object in state) {
            let status = state[object]['status'];
            if (status == false) {
               isValide = false;
               break;
            } else {
               isValide = true;
            }
         }

         if (isValide == true) {
            console.log('coucou');
            getConnected();
            console.log(e.target.submit());
            e.target.submit();
         }
         return isValide;
      }

      checkEmail();
      checkPassword();
      globalCheck();
   })
}