// JavaScript


const items = document.querySelectorAll('.img-item');

// console.log(items);
// console.log(items.length);

// for文
for(let i = 0; i < items.length; i++){

  const keyframes = {
    opacity: [0, 1],
    translate: ['0 50px', 0],
    filter: ['blur(10px)', 'blur(0)'],
  };
  
  const options = {
    duration: 600,
    delay: i * 400,
    fill: 'forwards',
  };

  items[i].animate(keyframes, options);
}

// forEach文
// items.forEach((item, i) => {

//   const keyframes = {
//     opacity: [0, 1],
//     translate: ['0 50px', 0],
//     filter: ['blur(10px)', 'blur(0)'],
//   };
  
//   const options = {
//     duration: 600,
//     delay: i * 400,
//     fill: 'forwards',
//   };

//   item.animate(keyframes, options);
// });

const open = document.querySelector('#btn-open');
const close = document.querySelector('#btn-close');
const menu = document.querySelector('#menu');

const menuOpen = () => {
  const keyframes = {
    visibility: ['hidden','visible'],
    opacity: [0,1]
  }
  const options = {
    duration: 600,
    easing: 'ease',
    fill: 'forwards',
  }
  menu.animate(keyframes,options);
}
open.addEventListener('click',menuOpen);
const menuClose = () => {
  const keyframes = {
    visibility: ['visible','hidden'],
    opacity: [1,0]
  }
  const options = {
    duration: 600,
    easing: 'ease',
    fill: 'forwards',
  }
  menu.animate(keyframes,options);
}
close.addEventListener('click',menuClose);

