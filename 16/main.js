// The End Of The Year Date CountDown
let countDownDate = new Date("Dec 31,2021 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date.getTime();
  let dateDiff = dateNow - countDownDate;

  // Get Time Units
  let days = dateDiff / 1000 / 60 /;

});

console.log(countDownDate);
