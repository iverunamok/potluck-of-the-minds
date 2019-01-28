import $ from 'jquery'
import bulmaCarousel from '../node_modules/bulma-carousel/dist/js/bulma-carousel'

// Dom ready?
const carousels = bulmaCarousel.attach()

// String constants
const COUNTER_ID = 'potm-counter'
const COUNT_DATE = 'February 22, 2019 18:30:00'
// Ids for setting the countdown
const placementArray = [
  'potm-days',
  'potm-hours',
  'potm-minutes',
  'potm-seconds',
]

const countDownDate = new Date(COUNT_DATE).getTime();

function checkIndex () {
  return window.location.pathname.includes('index') 
  || window.location.pathname === '/'
}

// Update the count down every 1 second
if(checkIndex()) {
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
    const timeArray = [days, hours, minutes, seconds]
    for (let index = 0; index < placementArray.length; index++) {
      document.getElementById(placementArray[index]).textContent = timeArray[index];
    }
  
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
