const clockInput = document.querySelector(".clock");
let keyframes = [
  { transform: "translateY(0%)" },
  { transform: "translateY(100%)" },
];

let animateOptions = {
  duration: 500,
};

const classLists = {
  hBt: [".hours__beforeTens", "beforeTens"],
  hBo: [".hours__beforeOnes", "beforeOnes"],
  hT: [".hours__tens", "tens"],
  hO: [".hours__ones", "ones"],
  mBt: [".minutes__beforeTens", "beforeTens"],
  mBo: [".minutes__beforeOnes", "beforeOnes"],
  mT: [".minutes__tens", "tens"],
  mO: [".minutes__ones", "ones"],
  sBt: [".seconds__beforeTens", "beforeTens"],
  sBo: [".seconds__beforeOnes", "beforeOnes"],
  sT: [".seconds__tens", "tens"],
  sO: [".seconds__ones", "ones"],
};
createElements();

function createElements() {
  const clockNames = ["hours", "minutes", "seconds"];
  clockNames.forEach((element) => {
    clockInput.innerHTML += `<div class="${element} clock__numbers"><div class="${element}__beforeTens beforeTens"></div><div class="${element}__beforeOnes beforeOnes"></div><div class="${element}__tens tens"></div><div class="${element}__ones ones"></div></div>`;
  });
}

let intervals = setInterval(() => {
  const date = splitDate(new Date());
  const hours = addLeadingZero(date.hours);
  const minutes = addLeadingZero(date.minutes);
  const seconds = addLeadingZero(date.seconds);
  const hoursSplitted = splitDigits(hours);
  const minutesSplitted = splitDigits(minutes);
  const secondsSplitted = splitDigits(seconds);
  moveSOnes(secondsSplitted);
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

function addLeadingZero(value) {
  return value < 10 ? value.toString().padStart(2, "0") : value.toString();
}

function moveSOnes(secondsArray) {
  const sBeforeO = document.querySelector(".seconds__beforeOnes");
  const sOnes = document.querySelector(".seconds__ones");
  sBeforeO.textContent = secondsArray[1] + 1;
  sOnes.textContent = secondsArray[1];
  sBeforeO.animate(keyframes, animateOptions);
  sOnes.animate(keyframes, animateOptions);
}
