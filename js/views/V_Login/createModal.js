import { handleBackup } from "../../handle/H_Login/handleBackup.js";

export const createModal = () => {
   const body = document.querySelector('body');
   const blockPage = document.querySelector('.block-page');
   blockPage.style.opacity = .2;

   const modal = document.createElement('div');
   modal.classList.add('modal-forgot-password');

   const askNewPassword = (() => {
      const askPassDiv = document.createElement('div');
      askPassDiv.classList.add('ask-password');
      askPassDiv.classList.add('form-data');
      askPassDiv.setAttribute('data-error','Veuillez renseigner le champs email au format : exemple@email.fr');
      askPassDiv.setAttribute('data-error-visible', false);
   
      const cross = document.createElement('img');
      cross.classList.add('cross');
      cross.src = './../../../assets/images/close.svg';
      cross.alt = 'cross';

      const backUpSpan = document.createElement('span');
      backUpSpan.innerHTML = 'Veuillez entrer votre adresse mail';

      const backupInp = document.createElement('input');
      backupInp.type = 'email';
      backupInp.classList.add('check-inp-backup');
      backupInp.classList.add('text-control')
      backupInp.setAttribute('data-error','ERROR');   

      const backUpBtn = document.createElement('button');
      backUpBtn.type = 'submit';
      backUpBtn.classList.add('backup-btn');
      backUpBtn.innerHTML = 'Renvoyer un mot de passe';

      cross.addEventListener('click', closeModal);
      backUpBtn.addEventListener('click', handleBackup)

      modal.append(askPassDiv, cross);
      askPassDiv.append(backUpSpan, backupInp, backUpBtn);
   })();

   body.append(modal);
};

export const closeModal = () => {
   const blockPage = document.querySelector('.block-page');
   blockPage.style.opacity = 1;
   
   const body = document.querySelector('body');
   const modal = document.querySelector('.modal-forgot-password');
   
   const removeModal = body.removeChild(modal);
};

/* after ask your email to send you another password */
export const infoByEmail = () => {
   const modal = document.querySelector('.modal-forgot-password');
   const askPassDiv = document.querySelector('.ask-password');
   
   const removeModal = modal.removeChild(askPassDiv);

   const sendEmailDiv = document.createElement('div');
   sendEmailDiv.classList.add('send-email');

   const sendSpan = document.createElement('span');
   sendSpan.innerHTML = 'Un email viens de vous être envoyer à l\'adresse que vous venez d\'indiquer';

   modal.append(sendEmailDiv);
   sendEmailDiv.append(sendSpan);
};
