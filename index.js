const selectMenu = document.querySelectorAll('select');
const currentTime = document.querySelector('h1');
const content = document.querySelector('.content');
const setAlarmBtn = document.querySelector('button');

let alarmTime;
let time;
for (let i = 12; i > 0; i--) {
  i = i < 10 ? `0${i}` : i;
  const option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option);
}
for (let i = 59; i > 0; i--) {
  i = i < 10 ? `0${i}` : i;
  const option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option);
}
for (let i = 2; i > 0; i--) {
  const ampm = i === 1 ? 'AM' : 'PM';
  const option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML('afterend', option);
}

const setAlarm = () => {
  // getting hour, minute, ampm select tag value
  time = ` ${selectMenu[0].value}: ${selectMenu[1].value} : ${selectMenu[2].value}`;
  if (time.includes('Hour') || time.includes('Minute') || time.includes('AM/PM')) {
    alert('Please,select a valid time to set alarm');
  }

  content.classList.add('disable');
  setAlarmBtn.innerHTML = 'Clear Alarm';
};

setInterval(() => {
  // getting hour, mins, secs
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = 'AM';

  if (h >= 12) {
    h = h - 12;
    ampm = 'PM';
  }
  // if hour value is 0, set this value to 12
  h = h === 0 ? h = 12 : h;
  // adding 0 before hr, min, sec if thi value is less than 10
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  // getting current time in digital
  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
  alarmTime = time;
  if (alarmTime === `${h}:${m} ${ampm}`) {
    alert('alarm ringing');
  }
}, 1000);


setAlarmBtn.addEventListener('click', setAlarm);