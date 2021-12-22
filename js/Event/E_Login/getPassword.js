export const getNewPassword = () => {

   const forgotLink = document.querySelector('.forgot-password');
   forgotLink.addEventListener('click', openModal());
   /* handle modal */
   const openModal = () => {
      createModal();
   };

   const closeModal = () => {
      const modal = document.querySelector('.modal-forgot-password');
      modal.style.display = 'none';

      const blockPage = document.querySelector('.block-page');
      blockPage.style.opacity = 1;
   };
};