/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const logo = document.querySelector('#hplogoo svg');

  const newImg = document.createElement('img');
  newImg.src =
    'https://raw.githubusercontent.com/HackYourFuture/Assignments/refs/heads/main/assets/hyf-logo-black-bg-small.png';
  newImg.srcset = '';

  logo.replaceWith(newImg);
  return logo;
}

hijackGoogleLogo();
