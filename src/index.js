import $ from 'jquery'
import bulmaCarousel from '../node_modules/bulma-carousel/dist/js/bulma-carousel'

console.log(window.location.pathname === '/')
// dom ready
const carousels = bulmaCarousel.attach()
const countDownDate = new Date('February 22, 2019 18:30:00').getTime();

// string constants
const COUNTER_ID = 'potm-counter'

// Update the count down every 1 second
if(window.location.pathname.includes('index') || window.location.pathname === '/') {
  console.log('helo')
  setInterval(() => {
    'use strict';
    // Get todays date and time
    let now = new Date().getTime();
  
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    let html = 
    `<span class='potm-clock-number'>${days}<span>
     <span class='potm-clock-letter'>D</span>
     <span class='potm-clock-number'>${hours}</span>
     <span class='potm-clock-letter'>H</span> 
     <span class='potm-clock-number'>${minutes}</span>
     <span class='potm-clock-letter'>M</span> 
     <span class='potm-clock-number'>${seconds}<span>
     <span class='potm-clock-letter'>S</span> `;
    document.getElementById(COUNTER_ID).innerHTML = html;
  
    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(this);
      document.getElementById(COUNTER_ID).innerHTML = 'It Right Meow!';
    }
  }, 1000);
}

function sendMail() {
  let send = 'mailto:potluckOfTheMinds406@gmail.com?body=' + document.getElementById('body').value
  window.open(send);
}

window.onSubmit = function onSubmit(token) {
  if(token) {
    sendMail()
  }
}
