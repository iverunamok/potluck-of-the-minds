console.log('index js')

const countDownDate = new Date('February 26, 2019 18:00:00').getTime();

// Update the count down every 1 second
if(window.location.pathname.includes('index')) {
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
    let html = `${days}d ${hours}h ${minutes}m ${seconds}s `;
    document.getElementById('counter').innerHTML = html;
  
    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(this);
      document.getElementById('counter').innerHTML = 'It Right Meow!';
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
