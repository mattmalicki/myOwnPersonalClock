// class Clock {
//   clockEl;
//   hoursEl;
//   hoursEls = {
//     hoursBeforeTensEl,
//     hoursBeforeOnesEl,
//     hoursTensEl,
//     hoursOnesEl,
//   };
//   minutesEl;
//   minutesEls = {
//     minutesBeforeTensEl,
//     minutesBeforeOnesEl,
//     minutesTensEl,
//     minutesOnesEl,
//   };
//   secondsEl;
//   secondsEls = {
//     secondsBeforeTensEl,
//     secondsBeforeOnesEl,
//     secondsTensEl,
//     secondsOnesEl,
//   };
//   #div = "div";

//   set hoursEl(hoursEl) {
//     this.hoursEl = hoursEl;
//   }
//   set hoursBeforeTensEl(beforeTens) {
//     this.hoursEls.hoursBeforeTensEl = beforeTens;
//   }
//   set hoursBeforeOnesEl(beforeOnes) {
//     this.hoursEls.hoursBeforeOnesEl = beforeOnes;
//   }
//   set hoursTensEl(tens) {
//     this.hoursEls.hoursTensEl = tens;
//   }
//   set hoursOnesEl(ones) {
//     this.hoursEls.hoursOnesEl = ones;
//   }
//   set minutesEl(minutesEl) {
//     this.minutesEl = minutesEl;
//   }
//   set minutesBeforeTensEl(beforeTens) {
//     this.minutesEls.minutesBeforeTensEl = beforeTens;
//   }
//   set minutesBeforeOnesEl(beforeOnes) {
//     this.minutesEls.minutesBeforeOnesEl = beforeOnes;
//   }
//   set minutesTensEl(tens) {
//     this.minutesEls.minutesTensEl = tens;
//   }
//   set minutesOnesEl(ones) {
//     this.minutesEls.minutesOnesEl = ones;
//   }
//   set secondsEl(secondsEl) {
//     this.secondsEl = secondsEl;
//   }
//   set secondsBeforeTensEl(beforeTens) {
//     this.secondsEls.secondsBeforeTensEl = beforeTens;
//   }
//   set secondsBeforeOnesEl(beforeOnes) {
//     this.secondsEls.secondsBeforeOnesEl = beforeOnes;
//   }
//   set secondsTensEl(tens) {
//     this.secondsEls.secondsTensEl = tens;
//   }
//   set secondsOnesEl(ones) {
//     this.secondsEls.secondsOnesEl = ones;
//   }

//   constructor() {}
//   clock() {}
// }

const clockInput = document.querySelector(".clock");
// hours
const hoursEl = document.createElement("div");
hoursEl.classList.add("hours");
const hoursBeforeTensEl = document.createElement("div");
const hoursBeforeOnesEl = document.createElement("div");
const hoursTensEl = document.createElement("div");
const hoursOnesEl = document.createElement("div");
hoursBeforeTensEl.classList.add("beforeTens", "hours__beforeTens");
hoursBeforeOnesEl.classList.add("beforeOnes", "hours__beforeOnes");
hoursTensEl.classList.add("hours__numbers", "hours__tens");
hoursOnesEl.classList.add("hours__numbers", "hours__ones");

// minutes
const minutesEl = document.createElement("div");
minutesEl.classList.add("minutes");
const minutesBeforeTensEl = document.createElement("div");
const minutesBeforeOnesEl = document.createElement("div");
const minutesTensEl = document.createElement("div");
const minutesOnesEl = document.createElement("div");
minutesBeforeTensEl.classList.add("beforeTens", "minutes__beforeTens");
minutesBeforeOnesEl.classList.add("beforeOnes", "minutes__beforeOnes");
minutesTensEl.classList.add("minutes__numbers", "minutes__tens");
minutesOnesEl.classList.add("minutes__numbers", "minutes__ones");
// seconds
const secondsEl = document.createElement("div");
secondsEl.classList.add("seconds");
const secondsBeforeTensEl = document.createElement("div");
const secondsBeforeOnesEl = document.createElement("div");
const secondsTensEl = document.createElement("div");
const secondsOnesEl = document.createElement("div");
secondsBeforeTensEl.classList.add("beforeTens", "seconds__beforeTens");
secondsBeforeOnesEl.classList.add("beforeOnes", "seconds__beforeOnes");
secondsTensEl.classList.add("seconds__numbers", "secodns__tens");
secondsOnesEl.classList.add("seconds__numbers", "seconds__ones");
// adding elements
clockInput.append(hoursEl);
clockInput.append(minutesEl);
clockInput.append(secondsEl);
// adding hours elements
hoursEl.append(hoursBeforeTensEl);
hoursEl.append(hoursBeforeOnesEl);
hoursEl.append(hoursTensEl);
hoursEl.append(hoursOnesEl);
//  adding minutes elements
minutesEl.append(minutesBeforeTensEl);
minutesEl.append(minutesBeforeOnesEl);
minutesEl.append(minutesTensEl);
minutesEl.append(minutesOnesEl);
// adding seconds elements
secondsEl.append(secondsBeforeTensEl);
secondsEl.append(secondsBeforeOnesEl);
secondsEl.append(secondsTensEl);
secondsEl.append(secondsOnesEl);

const clockArray = [hoursEl, minutesEl, secondsEl];
const beforeTensArray = [
  hoursBeforeTensEl,
  minutesBeforeTensEl,
  secondsBeforeTensEl,
];
const beforeOnesArray = [
  hoursBeforeOnesEl,
  minutesBeforeOnesEl,
  secondsBeforeOnesEl,
];
const tensArray = [hoursTensEl, minutesTensEl, secondsTensEl];
const onesArray = [hoursOnesEl, minutesOnesEl, secondsOnesEl];

clockArray.forEach((element) => {
  element.classList.add("clock__numbers");
});

beforeTensArray.forEach((element) => {
  element.classList.add("clock__beforeTens");
});
beforeOnesArray.forEach((element) => {
  element.classList.add("clock__beforeOnes");
});
tensArray.forEach((element) => {
  element.classList.add("clock__tens");
});
onesArray.forEach((element) => {
  element.classList.add("clock__ones");
});

//

let intervals = setInterval(() => {
  const date = splitDate(new Date());
  const hours = addLeadingZero(date.hours);
  const minutes = addLeadingZero(date.minutes);
  const seconds = addLeadingZero(date.seconds);
  hoursBeforeTensEl.textContent = splitDigits(hours)[0];
  hoursBeforeOnesEl.textContent = splitDigits(hours)[1];
  minutesBeforeTensEl.textContent = splitDigits(minutes)[0];
  minutesBeforeOnesEl.textContent = splitDigits(minutes)[1];
  secondsBeforeTensEl.textContent = splitDigits(seconds)[0];
  secondsBeforeOnesEl.textContent = splitDigits(seconds)[1];
  hoursTensEl.textContent = splitDigits(hours)[0];
  hoursOnesEl.textContent = splitDigits(hours)[1];
  minutesTensEl.textContent = splitDigits(minutes)[0];
  minutesOnesEl.textContent = splitDigits(minutes)[1];
  secondsTensEl.textContent = splitDigits(seconds)[0];
  secondsOnesEl.textContent = splitDigits(seconds)[1];
  changeDigit("seconds", "ones");
}, 1000);
setTimeout(() => {
  changeDigit("seconds", "tens");
}, 10000);

function splitDate(date) {
  const dayM = date.getDate();
  const dayW = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ms = date.getMilliseconds();
  return { dayM, dayW, month, year, hours, minutes, seconds, ms };
}

function splitDigits(number) {
  return number.toString().split("").map(Number);
}

function addLeadingZero(value) {
  return value < 10 ? value.toString().padStart(2, "0") : value.toString();
}

function changeDigit(name, digit) {
  if (name === "seconds") {
    if (digit === "ones") {
      secondsBeforeOnesEl.classList.add("moveCenter");
      secondsOnesEl.classList.add("moveDown");
      return;
    } else if (digit === "tens") {
      secondsBeforeTensEl.classList.add("moveCenter");
      secondsTensEl.classList.add("moveDown");
      return;
    }
  }
}
