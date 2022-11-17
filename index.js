const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
const p = document.createElement("p")

const createTimerAnimator = () => {
  p.remove
  return (seconds) => {
    let timer = setInterval(() => {
      const second = seconds%60
      const minute = seconds/60%60
      const hour = seconds/60/60%60
      if (seconds <= 0) {
        timerEl.innerHTML = "00:00:00"
        timerEl.append(p)
        p.textContent = "Время вышло"
        p.style.color = "red"
        clearInterval(timer)
      } else {
        timerEl.innerHTML = `${(hour >= 10) ? Math.trunc(hour) : `0${Math.trunc(hour)}`}:${(minute >= 10) ? Math.trunc(minute) : `0${Math.trunc(minute)}`}:${(second >= 10) ? second : `0${second}`}`
      }
      --seconds
    }, 1000)
  };
};

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', function() {
  const value = this.value;
  this.value = value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
