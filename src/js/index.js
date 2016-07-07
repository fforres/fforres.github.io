const load = () => {
  let hiHeight = document.getElementById('hi').offsetTop;

  const setScroll = (pos, time) => {
    let currentPos = document.body.scrollTop;
    const int = setInterval(() => {
      window.scrollTo(0, currentPos + (pos / time) + 7);
      currentPos = document.body.scrollTop;
      if (currentPos >= pos) {
        clearInterval(int);
      }
    }, (pos / time));
  };
  const doClick = (e) => {
    e.preventDefault();
    setScroll(hiHeight, 200);
  };
  // EVENTS DEFINITIONS


  // EVENTS EXCECUTIONS
  window.addEventListener('resize', () => {
    hiHeight = document.getElementById('hi').offsetTop;
  });

  document.getElementById('tohi').addEventListener('click', doClick);
};


document.addEventListener('DOMContentLoaded', () => {
  if (document.readyState === 'complete') {
    load();
  }
  if (document.readyState === 'interactive') {
    load();
  }
  document.addEventListener('complete', load, false);
  return null;
});
