let second = document.getElementById("seconds");
let p = document.createElement("p");
second.appendChild(p);

let index = Number(prompt("შეიყვანე წამი"));

let interval = setInterval(() => {
  if (index === 0 && indexMinute === 0 && indexHour === 0 && indexDay === 0) {
    clearInterval(interval);
    return;
  }

  p.textContent = index;
  index--;

  if (index < 0) {
    index = 59;
    p.textContent = index;
    indexMinute--;
    m.textContent = indexMinute;
  }

  if (indexMinute < 0) {
    indexMinute = 59;
    m.textContent = indexMinute;
    indexHour--;
    h.textContent = indexHour;
  }

  if (indexHour < 0) {
    indexHour = 23;
    h.textContent = indexHour;
    indexDay--;
    d.textContent = indexDay;
  }

  if (indexDay < 0) {
    indexDay = 0;
    d.textContent = indexDay;
  }

  if (index === 0 && indexMinute === 0 && indexHour === 0 && indexDay === 0) {
    clearInterval(interval);
    return;
  }
}, 1000);

let minute = document.getElementById("minutes");
let m = document.createElement("p");
minute.appendChild(m);

let indexMinute = Number(prompt("შეიყვანე წუთი"));
m.textContent = indexMinute;

let hour = document.getElementById("hours");
let h = document.createElement("p");
hour.appendChild(h);

let indexHour = Number(prompt("შეიყვანე საათი"));
h.textContent = indexHour;

let day = document.getElementById("days");
let d = document.createElement("p");
day.appendChild(d);

let indexDay = Number(prompt("შეიყვანე დღე"));
d.textContent = indexDay;
