export const forgotPassLink = () => {
   const container = document.querySelector('.login-form');

   const forgotLink = document.createElement('a');
   forgotLink.href = '#';
   forgotLink.innerHTML = 'Mot de passe oublié';

   container.append(forgotLink)
};