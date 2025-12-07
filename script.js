let second = document.getElementById("seconds");
let p = document.createElement("p");
second.appendChild(p);

let index = prompt("შეიყვანე წამი");

let interval = setInterval(() => {
  p.textContent = index;

  index--;

  if (index === -1) {
    clearInterval(interval);
  }
}, 1000);

let minute = document.getElementById("minutes");
let m = document.createElement("p");
minute.appendChild(m);

let indexMinute = prompt("შეიყვანე წუთი");

let intervalSecond = setInterval(() => {
  m.textContent = indexMinute;

  indexMinute--;

  if (indexMinute === -1) {
    clearInterval(intervalSecond);
  }
}, 1000);

let hour = document.getElementById("hours");
let h = document.createElement("p");
hour.appendChild(h);

let indexHour = prompt("შეიყვანე საათი");

let intervalHour = setInterval(() => {
  h.textContent = indexHour;

  indexHour--;

  if (indexHour === -1) {
    clearInterval(intervalHour);
  }
}, 1000);

let day = document.getElementById("days");
let d = document.createElement("p");
day.appendChild(d);

let indexDay = prompt("შეიყვანე დღე");

let intervalDay = setInterval(() => {
  d.textContent = indexDay;

  indexDay--;

  if (indexDay === -1) {
    clearInterval(intervalDay);
  }
}, 1000);
