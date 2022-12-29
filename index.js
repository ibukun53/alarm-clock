const selectMenu = document.querySelectorAll('select');

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
  if (h === 0) {
    h = 12;
  }
  // adding 0 before hr, min, sec if thi value is less than 10
  if (h < 10) {
    h += '0';
  } else if (m < 10) {
    m += '0';
  } else if (s < 10) {
    s += '0';
  }
  console.log(`${h}:${m}:${s} ${ampm}`);
}, 1000);