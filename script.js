let index = 1;

let days = document.createElement("p");
document.body.appendChild(days);

let interval = setInterval(() => {
  days.textContent = index;

  index++;
  if (index === 11) {
    clearInterval(interval);
  }
}, 1000);
