export const loader = () => {
   const body = document.querySelector('body');

   const balls = document.createElement('div');
   balls.id = 'balls';

   const ball1 = document.createElement('div');
   ball1.classList.add('ball');
   ball1.id = 'ball1';

   const ball2 = document.createElement('div');
   ball2.classList.add('ball');
   ball2.id = 'ball2';

   const ball3 = document.createElement('div');
   ball3.classList.add('ball');
   ball3.id = 'ball3';


   body.append(balls);

   balls.append(ball1, ball2, ball3);
}
