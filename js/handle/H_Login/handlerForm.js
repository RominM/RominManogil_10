export const handleForm = () => {

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
   });
};