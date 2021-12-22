export const forgotPassLink = () => {
   const container = document.querySelector('.login-form');

   const forgotLink = document.createElement('button');
   forgotLink.classList.add('forgot-password');
   forgotLink.innerHTML = 'Mot de passe oublié';

   container.append(forgotLink)

   /*get a new password to click on "forgot password" */
   getNewPassword();
};

const getNewPassword = () => {

   /* look of modal */
   const createModal = () => {
      const body = document.querySelector('body');
      const blockPage = document.querySelector('.block-page');
      blockPage.style.opacity = .2;

      const modal = document.createElement('div');
      modal.classList.add('modal-forgot-password')

      const askNewPassword = (() => {
         const askPassDiv = document.createElement('div');
         askPassDiv.classList.add('ask-password');

         const cross = document.createElement('img');
         cross.classList.add('cross');
         cross.src = './../../../assets/images/close.svg';
         cross.alt = 'cross';

         const span = document.createElement('span');
         span.innerHTML = 'Veuillez entrer votre adresse mail';

         const input = document.createElement('input');
         input.type = 'email';

         const backUpBtn = document.createElement('button');
         backUpBtn.type = 'submit';
         backUpBtn.classList.add('backup-btn');
         backUpBtn.innerHTML = 'Renvoyer un mot de passe';

         modal.append(askPassDiv, cross);
         askPassDiv.append(span, input, backUpBtn);
      })();

      /* after ask your email to send you another password */
      const infoByEmail = (() => {
         const cross = document.createElement('img');
         cross.classList.add('cross');
         cross.src = './../../../assets/images/close.svg';
         cross.alt = 'cross';

         const span = document.createElement('span');
         span.innerHTML = 'Un email viens de vous être envoyer à l\'adresse que vous venez d\'indiquer';

         modal.append(cross, span);
      });
      body.append(modal);
   };

   /* handle modal */
   const openModal = () => {
      createModal();
      // const modal = document.querySelector('.modal-forgot-password');
      // modal.style.display = 'block';
   }

   const closeModal = () => {
      const modal = document.querySelector('.modal-forgot-password');
      modal.style.display = 'none';
   }

   /* Event */
   const forgotLink = document.querySelector('.forgot-password');
   const cross = document.querySelector('.cross');

   forgotLink.addEventListener('click', openModal);
   cross.addEventListener('click', closeModal);

}