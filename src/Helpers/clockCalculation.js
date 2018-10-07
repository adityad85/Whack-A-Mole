const getMinutes = (time) => {
  const min = Math.floor(time / 60);
  return min;
};

const getSeconds = (time) => {
  const sec = Math.floor(time % 60);
  return sec;
};

export {
  getMinutes,
  getSeconds,
};
