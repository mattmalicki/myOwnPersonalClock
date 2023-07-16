const clockInput = document.querySelector(".clock");
const clockChildren = createElements(clockInput);

let intervals = setInterval(() => {
  const date = splitDate(new Date());
  const hours = addLeadingZero(date.hours);
  const minutes = addLeadingZero(date.minutes);
  const seconds = addLeadingZero(date.seconds);
  clockChildren.hoursTensEl.textContent = splitDigits(hours)[0];
  clockChildren.hoursOnesEl.textContent = splitDigits(hours)[1];
  clockChildren.minutesTensEl.textContent = splitDigits(minutes)[0];
  clockChildren.minutesOnesEl.textContent = splitDigits(minutes)[1];
  clockChildren.secondsTensEl.textContent = splitDigits(seconds)[0];
  clockChildren.secondsOnesEl.textContent = splitDigits(seconds)[1];
}, 1000);

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

function createElements(clockEl) {
  const divEl =
    '<div class="clock__numbers hours"><div class="hours__numbers tens hours__tens"></div><div class="hours__numbers ones hours__ones"></div></div><div class="hours__numbers tens hours__tens"></div><div class="hours__numbers ones hours__ones"></div></div><div class="clock__numbers minutes"><div class="minutes__numbers tens minutes__tens"></div><div class="minutes__numbers ones minutes__ones"></div></div><div class="clock__numbers seconds"><div class="seconds__numbers tens seconds__tens"></div><div class="seconds__numbers ones seconds__ones"></div></div>';
  clockEl.innerHTML = divEl;
  const hoursEl = clockEl.querySelector(".hours");
  const hoursTensEl = hoursEl.firstElementChild;
  const hoursOnesEl = hoursEl.lastElementChild;
  const minutesEl = clockEl.querySelector(".minutes");
  const minutesTensEl = minutesEl.firstElementChild;
  const minutesOnesEl = minutesEl.lastElementChild;
  const secondsEl = clockEl.querySelector(".seconds");
  const secondsTensEl = secondsEl.firstElementChild;
  const secondsOnesEl = secondsEl.lastElementChild;
  return {
    hoursTensEl,
    hoursOnesEl,
    minutesTensEl,
    minutesOnesEl,
    secondsTensEl,
    secondsOnesEl,
  };
}

function addLeadingZero(value) {
  return value < 10 ? value.toString().padStart(2, "0") : value.toString();
}
