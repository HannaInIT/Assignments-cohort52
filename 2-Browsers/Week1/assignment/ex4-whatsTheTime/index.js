/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
  const timeParagraph = document.createElement('p');
  document.body.appendChild(timeParagraph);

  function updateTime() {
    const currentTime = new Date();
    const hh = String(currentTime.getHours()).padStart(2, '0');
    const mm = String(currentTime.getMinutes()).padStart(2, '0');
    const ss = String(currentTime.getSeconds()).padStart(2, '0');

    timeParagraph.textContent = `${hh}:${mm}:${ss}`;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

window.addEventListener('load', addCurrentTime);
