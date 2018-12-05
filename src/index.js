import './style/index.scss';
import { countDown, sendMail } from './helpers';

// Update the count down every 1 second
if(window.location.pathname.includes('index')) {
  countDown()
}

window.onSubmit = function onSubmit(token) {
  if(token) {
    sendMail()
  }
}
