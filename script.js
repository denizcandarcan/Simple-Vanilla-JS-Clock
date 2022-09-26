const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
console.log(secondHand)

function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegress = ((seconds/60)*360) + 90;
  secondHand.style.transform =`rotate(${secondsDegress}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes/60)*360) + 90;
  minsHand.style.transform =`rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours/12)*360) + 90;
  hourHand.style.transform =`rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
