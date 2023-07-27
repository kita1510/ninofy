export const numberToMinute = (num = 0) => {
  const number = Math.floor(num);
  const minutes = Math.floor(number / 60);
  const second = number % 60;
  const seconds = Math.floor(second);
  if (num) {
    if (num < 10 || seconds < 10) {
      return minutes + ":0" + seconds;
    }
    return minutes + ":" + seconds;
  } else {
    return "00:00";
  }
};
