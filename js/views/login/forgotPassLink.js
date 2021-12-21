export const forgotPassLink = () => {
   const container = document.querySelector('.login-form');

   const forgotLink = document.createElement('button');
   forgotLink.classList.add('forgot-password');
   forgotLink.innerHTML = 'Mot de passe oublié';

   container.append(forgotLink)

   getNewPassword();
};

const getNewPassword = () => {
   
   const createModal = () => {
      const modal = document.createElement('div');
      modal.classList.add('modal-forgot-password')

      const askNewPassword = (() => {
         const span = document.createElement('span');
         span.innerHTML = 'Veuillez entrer votre adresse mail';

         const input = document.createElement('input');
         input.type = 'email';

         const submit = document.createElement('button');
         submit.type = 'submit';

         modal.append(span, input, submit);
      })();

      const infoByEmail = (() => {
         const cross = document.createElement('img');
         cross.classList.add('cross');
         cross.src = '';
         cross.alt = 'cross';

         const span = document.createElement('span');
         span.innerHTML = 'Un email viens de vous être envoyer à l\'adresse que vous venez d\'indiquer';

         modal.append(cross, span);
      });
   }

   const openModal = () => {
      const modal = document.querySelector('.modal-forgot-password');
      modal.style.display = 'block';
   }

   const closeModal = () => {
      const modal = document.querySelector('.modal-forgot-password');
      modal.style.display = 'none';
   }

   const forgotLink = document.querySelector('.forgot-password');
   const cross = document.querySelector('.cross');

   forgotLink.addEventListener('click', openModal);
   cross.addEventListener('click', closeModal);

}