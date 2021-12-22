import { goToSignIn } from "../../handle/H_SignIn/signIn.js";

export const signIn = () => {
   const container = document.querySelector('.login-page');

   const signin = document.createElement('a');
   signin.href = "./html/sigin.html";
   signin.classList.add('signin');

   const arrow = document.createElement('div');
   arrow.classList.add('arrow');
   const img = document.createElement('img');
   img.src = "./../../../assets/images/arrow-circle-down-solid.svg";

   const span = document.createElement('span');
   span.innerHTML = 'Rejoindre la communauté';

   container.append(signin);
   signin.append(arrow, span);
   arrow.append(img);

   signin.addEventListener('click', goToSignIn)
}