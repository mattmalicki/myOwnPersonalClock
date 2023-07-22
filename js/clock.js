"use strict";

class Clock {
  clockInterval;
  clock;
  hours = {
    hoursEl: document.createElement("div"),
    hoursTEl: document.createElement("div"),
    hoursOEl: document.createElement("div"),
  };
  minutes = {
    minutesEl: document.createElement("div"),
    minutesTEl: document.createElement("div"),
    minutesOEl: document.createElement("div"),
  };

  seconds = {
    secondsEl: document.createElement("div"),
    secondsTEl: document.createElement("div"),
    secondsOEl: document.createElement("div"),
  };
  bTensEl = '<div class="beforeTens"></div>';
  tensEl = '<div class="tens"></div>';
  bOnesEl = '<div class="beforeOnes"></div>';
  onesEl = '<div class="ones"></div>';

  keyframesCenter = [{ top: "-100%" }, { top: "0" }];
  keyframesDown = [
    { transform: "translateY(0)" },
    { transform: "translateY(100%)" },
  ];

  animateOptions = {
    fill: "forwards",
    duration: 500,
  };

  constructor(clock) {
    this.clock = clock;
    this.setElements();
    this.addElements(this.hours.hoursEl);
    this.addElements(this.minutes.minutesEl);
    this.addElements(this.seconds.secondsEl);
    this.addElements(this.clock);
    this.setTime();
    this.makeMagic(this.clockInterval);
  }

  setElements() {
    this.hours.hoursEl.classList.add("hours");
    this.minutes.minutesEl.classList.add("minutes");
    this.seconds.secondsEl.classList.add("seconds");
    this.hours.hoursTEl.classList.add("hours__tens");
    this.hours.hoursOEl.classList.add("hours__ones");
    this.minutes.minutesTEl.classList.add("minutes__tens");
    this.minutes.minutesOEl.classList.add("minutes__ones");
    this.seconds.secondsTEl.classList.add("seconds__tens");
    this.seconds.secondsOEl.classList.add("seconds__ones");
    this.fillElements(this.hours.hoursTEl);
    this.fillElements(this.hours.hoursOEl);
    this.fillElements(this.minutes.minutesTEl);
    this.fillElements(this.minutes.minutesOEl);
    this.fillElements(this.seconds.secondsTEl);
    this.fillElements(this.seconds.secondsOEl);
  }

  addElements(element) {
    if (element === this.hours.hoursEl) {
      element.append(this.hours.hoursTEl);
      element.append(this.hours.hoursOEl);
      return;
    }
    if (element === this.minutes.minutesEl) {
      element.append(this.minutes.minutesTEl);
      element.append(this.minutes.minutesOEl);
      return;
    }
    if (element === this.seconds.secondsEl) {
      element.append(this.seconds.secondsTEl);
      element.append(this.seconds.secondsOEl);
      return;
    }
    if (element === this.clock) {
      element.append(this.hours.hoursEl);
      element.append(this.minutes.minutesEl);
      element.append(this.seconds.secondsEl);
      return;
    }
  }

  fillElements(element) {
    const classes = element.className;
    const tensEnd = new RegExp("tens");
    if (tensEnd.test(classes)) {
      element.insertAdjacentHTML("beforeend", this.bTensEl);
      element.insertAdjacentHTML("beforeend", this.tensEl);
    } else {
      element.insertAdjacentHTML("beforeend", this.bOnesEl);
      element.insertAdjacentHTML("beforeend", this.onesEl);
    }
  }

  setTime() {
    const timeObj = this.splitTime(new Date());
    const hBTensEl = this.hours.hoursTEl.querySelector(".beforeTens");
    hBTensEl.textContent =
      timeObj.hours >= 20
        ? this.addMidnight()
        : this.addNumberBT(timeObj.hours);

    const hBOnesEl = this.hours.hoursOEl.querySelector(".beforeOnes");
    hBOnesEl.textContent =
      timeObj.hours === 23
        ? this.addMidnight()
        : this.addNumberBO(timeObj.hours);

    const mBTensEl = this.minutes.minutesTEl.querySelector(".beforeTens");
    mBTensEl.textContent =
      timeObj.minutes >= 50
        ? this.addMidnight()
        : this.addNumberBT(timeObj.minutes);

    const mBOnesEl = this.minutes.minutesOEl.querySelector(".beforeOnes");
    mBOnesEl.textContent = this.addNumberBO(timeObj.minutes);

    const sBTensEl = this.seconds.secondsTEl.querySelector(".beforeTens");
    sBTensEl.textContent =
      timeObj.seconds >= 50
        ? this.addMidnight()
        : this.addNumberBT(timeObj.seconds);

    const sBOnesEl = this.seconds.secondsOEl.querySelector(".beforeOnes");
    sBOnesEl.textContent = this.addNumberBO(timeObj.seconds);

    const hTensEl = this.hours.hoursTEl.querySelector(".tens");
    hTensEl.textContent = this.addNumberT(timeObj.hours);

    const hOnesEl = this.hours.hoursOEl.querySelector(".ones");
    hOnesEl.textContent = this.addNumberO(timeObj.hours);

    const mTensEl = this.minutes.minutesTEl.querySelector(".tens");
    mTensEl.textContent = this.addNumberT(timeObj.minutes);

    const mOnesEl = this.minutes.minutesOEl.querySelector(".ones");
    mOnesEl.textContent = this.addNumberO(timeObj.minutes);

    const sTensEl = this.seconds.secondsTEl.querySelector(".tens");
    sTensEl.textContent = this.addNumberT(timeObj.seconds);

    const sOnesEl = this.seconds.secondsOEl.querySelector(".ones");
    sOnesEl.textContent = this.addNumberO(timeObj.seconds);
  }

  makeMagic(intervals) {
    intervals = setInterval(() => {
      const time = this.splitTime(new Date());
      const timeH = time.hours;
      const timeM = time.minutes;
      const timeS = time.seconds;
      const sBOnesEl = this.seconds.secondsOEl.querySelector(".beforeOnes");
      this.move(sBOnesEl);
      if (this.splitDigits(this.addLeadingZero(timeS))[1] === 9) {
        const sBTensEl = this.seconds.secondsTEl.querySelector(".beforeTens");
        this.move(sBTensEl);
      }
      if (timeS === 59) {
        const mBOnesEl = this.minutes.minutesOEl.querySelector(".beforeOnes");
        this.move(mBOnesEl);
      }
      if (
        this.splitDigits(this.addLeadingZero(timeM))[1] === 9 &&
        timeS === 59
      ) {
        const mBTensEl = this.minutes.minutesTEl.querySelector(".beforeTens");
        this.move(mBTensEl);
      }
      if (timeM == 59 && timeS == 59) {
        const hBOnesEl = this.hours.hoursOEl.querySelector(".beforeOnes");
        this.move(hBOnesEl);
      }
      if (timeH === 23 && timeM === 59 && timeS === 59) {
        const hBOnesEl = this.hours.hoursOEl.querySelector(".beforeOnes");
        const hBTensEl = this.hours.hoursTEl.querySelector(".beforeTens");
        this.move(hBOnesEl);
        this.move(hBTensEl);
      } else if (
        this.splitDigits(this.addLeadingZero(timeH))[1] === 9 &&
        timeM == 59 &&
        timeS == 59
      ) {
        const hBTensEl = this.hours.hoursTEl.querySelector(".beforeTens");
        this.move(hBTensEl);
      }
      this.setTime();
    }, 1000);
  }

  move(element) {
    const parentEl = element.parentNode;
    if (parentEl.className.includes("hours__tens")) {
      const hTensEl = this.hours.hoursTEl.querySelector(".tens");
      hTensEl.animate(this.keyframesDown, this.animateOptions);
      element.animate(this.keyframesCenter, this.animateOptions);
      setTimeout(() => {
        hTensEl.remove();
        element.classList.replace("beforeTens", "tens");
        this.hours.hoursTEl.insertAdjacentHTML("afterbegin", this.bTensEl);
      }, 900);
      return;
    }
    if (parentEl.className.includes("hours__ones")) {
      const hOnesEl = this.hours.hoursOEl.querySelector(".ones");
      hOnesEl.animate(this.keyframesDown, this.animateOptions);
      element.animate(this.keyframesCenter, this.animateOptions);
      setTimeout(() => {
        hOnesEl.remove();
        element.classList.replace("beforeOnes", "ones");
        this.hours.hoursOEl.insertAdjacentHTML("afterbegin", this.bOnesEl);
      }, 900);
      return;
    }
    if (parentEl.className.includes("minutes__tens")) {
      const mTensEl = this.minutes.minutesTEl.querySelector(".tens");
      mTensEl.animate(this.keyframesDown, this.animateOptions);
      element.animate(this.keyframesCenter, this.animateOptions);
      setTimeout(() => {
        mTensEl.remove();
        element.classList.replace("beforeTens", "tens");
        this.minutes.minutesTEl.insertAdjacentHTML("afterbegin", this.bTensEl);
      }, 900);
      return;
    }
    if (parentEl.className.includes("minutes__ones")) {
      const mOnesEl = this.minutes.minutesOEl.querySelector(".ones");
      mOnesEl.animate(this.keyframesDown, this.animateOptions);
      element.animate(this.keyframesCenter, this.animateOptions);
      setTimeout(() => {
        mOnesEl.remove();
        element.classList.replace("beforeOnes", "ones");
        this.minutes.minutesOEl.insertAdjacentHTML("afterbegin", this.bOnesEl);
      }, 900);
      return;
    }
    if (parentEl.className.includes("seconds__tens")) {
      const sTensEl = this.seconds.secondsTEl.querySelector(".tens");
      sTensEl.animate(this.keyframesDown, this.animateOptions);
      element.animate(this.keyframesCenter, this.animateOptions);
      setTimeout(() => {
        sTensEl.remove();
        element.classList.replace("beforeTens", "tens");
        this.seconds.secondsTEl.insertAdjacentHTML("afterbegin", this.bTensEl);
      }, 900);
      return;
    }
    if (parentEl.className.includes("seconds__ones")) {
      const sOnesEl = this.seconds.secondsOEl.querySelector(".ones");
      sOnesEl.animate(this.keyframesDown, this.animateOptions);
      element.animate(this.keyframesCenter, this.animateOptions);
      setTimeout(() => {
        sOnesEl.remove();
        element.classList.replace("beforeOnes", "ones");
        this.seconds.secondsOEl.insertAdjacentHTML("afterbegin", this.bOnesEl);
      }, 900);
      return;
    }
  }

  addMidnight() {
    return 0;
  }

  addNumberBT(number) {
    return this.splitDigits(this.addLeadingZero(number))[0] === 9
      ? 0
      : this.splitDigits(this.addLeadingZero(number))[0] + 1;
  }
  addNumberBO(number) {
    return this.splitDigits(this.addLeadingZero(number))[1] === 9
      ? 0
      : this.splitDigits(this.addLeadingZero(number))[1] + 1;
  }
  addNumberT(number) {
    return this.splitDigits(this.addLeadingZero(number))[0];
  }
  addNumberO(number) {
    return this.splitDigits(this.addLeadingZero(number))[1];
  }
  splitTime(time) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return { hours, minutes, seconds };
  }

  splitDigits(number) {
    return number.toString().split("").map(Number);
  }

  addLeadingZero(value) {
    return value < 10 ? value.toString().padStart(2, "0") : value.toString();
  }
}

const clock = new Clock(document.querySelector(".clock"));
