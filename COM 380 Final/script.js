
function button1() {
    const btn = document.getElementById("openaccordion1");
    btn.classList.toggle("openarrow1");
  }
 function button2() {
    const btn = document.getElementById("openaccordion2");
    btn.classList.toggle("openarrow2");
  }
 function button3() {
    const btn = document.getElementById("openaccordion3");
    btn.classList.toggle("openarrow3");
  }
 function button4() {
    const btn = document.getElementById("openaccordion4");
    btn.classList.toggle("openarrow4");
  }
 function button5() {
    const btn = document.getElementById("openaccordion5");
    btn.classList.toggle("openarrow5");
  }
 function button6() {
    const btn = document.getElementById("openaccordion6");
    btn.classList.toggle("openarrow6");
  }

let isHidden = false; 

function hideOthers(clickedButton) {
  const buttons = document.querySelectorAll('.mediatabs');

  if (!isHidden) {
    buttons.forEach(button => {
      if (button !== clickedButton) {
        button.style.display = 'none';
      }
    });
    isHidden = true;
  } else {
    buttons.forEach(button => {
      button.style.display = 'block';
    });
    isHidden = false;
  }
}

function showMedia(clickedButton) {
  const btn = document.getElementById('tab3');
  const media = document.getElementById('media3');
  
  if (media.style.display === "flex") {
    media.style.display = "none";
  } else {
    media.style.display = "flex";
  }
}

function openLeftReel() {
  var popup = document.getElementById("popupLeftReel");
  popup.classList.toggle("show");
}
function openRightReel() {
  var popup = document.getElementById("popupRightReel");
  popup.classList.toggle("show");
}
function openEngTxt() {
  var popup = document.getElementById("popupEngTxt");
  popup.classList.toggle("show");
}
function openArbTxt() {
  var popup = document.getElementById("popupArbTxt");
  popup.classList.toggle("show");
}
