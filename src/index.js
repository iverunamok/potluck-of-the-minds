import $ from 'jquery'
import bulmaCarousel from '../node_modules/bulma-carousel/dist/js/bulma-carousel'

// Dom ready?
const carousels = bulmaCarousel.attach()

// String constants
const COUNTER_ID = 'potm-counter'
const COUNT_DATE = 'July 22, 2019 18:30:00'

// Ids for setting the countdown
const placementArray = [
  'potm-days',
  'potm-hours',
  'potm-minutes',
  'potm-seconds',
]

const countDownDate = new Date(COUNT_DATE).getTime();

function ifClassRemove(classList, className) {
  if(classList.contains(className)) {
    classList.remove(className)
  }
}

function ifNotClassAdd(classList, className) {
  if(!classList.contains(className)) {
    classList.add(className)
  }
}

const pathnameCheck = {
  index () {
    return window.location.pathname.includes('index') 
    || window.location.pathname === '/'
  },
  contact() {
    return window.location.pathname.includes('contact') 
  }
}

function isEmail(emailToCheck) {
  // Checks < [A-Za-z0-9.%+-]+ > one or more of the preceding characters with +
  // Upper A-Z, lower a-z, numbers 0-9, bunch of symbols .%+- 
  // Then again < @[A-Za-z0-9.-]+ > after the at symbol
  // Then an escaped dot < \.[A-Za-z]{2,} > and 2 or more of Upper and lower
  return /[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(emailToCheck)
}

function emailValidator (e) {
  const email = e.target.value
  const emailInput = document.getElementById('potm-contact-email')
  const helpTag = document.getElementById('potm-contact-email-help')
  const emailDangerIcon = document.getElementById('ptom-contact-email-icon')
  if(email.length <= 1) {
    // clear all warnings
    helpTag.textContent = 'Enter a valid email'
    ifClassRemove(emailInput.classList, 'is-danger')
    ifClassRemove(helpTag.classList, 'is-danger')
    ifNotClassAdd(emailDangerIcon.classList, 'potm-hide')
  } else if (isEmail(email)) {
    helpTag.textContent = ''
    ifClassRemove(emailInput.classList, 'is-danger')
    ifClassRemove(emailInput.classList, 'is-danger')
    ifClassRemove(emailDangerIcon.classList, 'potm-hide')
  } else if (!isEmail(email)) {
    helpTag.textContent = 'This email is invalid'
    ifNotClassAdd(emailDangerIcon.classList, 'is-danger')
    ifNotClassAdd(helpTag.classList, 'is-danger')
    ifClassRemove(emailDangerIcon.classList, 'potm-hide')
  } else {
    console.log('default case')
  }
}

function indexCounterInterval () {
  return setInterval(() => {
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

// Check pathname and establish listeners for index
// Var established here to remove confusion
let counterInterval
if(pathnameCheck.index()) {
  counterInterval = indexCounterInterval()
} else {
  clearInterval(counterInterval)
}

// Check pathname and establish listeners for contact
if(pathnameCheck.contact()) {
  document.getElementById('potm-contact-email').addEventListener('change', emailValidator)
} 
