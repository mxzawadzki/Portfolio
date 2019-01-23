window.addEventListener("load", activateLinks);
document.getElementById('treat').addEventListener('click', giveTreat);

let timeoutID;

function fingorWelcome() {
  document.getElementById('doggo-chat').textContent = 'Hello, I\'m Fingor the Web Assistant! How can I help you?';
  document.getElementById('doggo-smile').src = 'img/Fingor-Smile-Open.png';
}

function activateLinks() {
  links = document.querySelectorAll('.helper__link--nav');
  Array.from(links).forEach(link => {
    link.addEventListener('click', fingorGo);
  });
}

function fingorGo() {
  document.getElementById('doggo-chat').textContent = 'Let\'s go!';
  document.getElementById('doggo-smile').src = 'img/Fingor.png';
  setTimeout(fingorWelcome, 2000);
}

function giveTreat() {
  clearTimeout(timeoutID);
  document.getElementById('doggo-chat').textContent = `${fingorThanks()}`;
  document.getElementById('doggo-smile').src = 'img/Fingor-Smile.png';
  timeoutID = setTimeout(fingorWelcome, 2000);
}

function fingorThanks() {
  function generateRandomQuote() {
    function getRandomNumber(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let randomQuote = getRandomNumber(8);
    let quote;
    switch (randomQuote) {
      case 0:
        quote = 'Most generous!';
        break;
      case 1:
        quote = 'Best day ever!';
        break;
      case 2:
        quote = 'You are truly a wonderful person!';
        break;
      case 3:
        quote = 'I\'m so happy, thank you!';
        break;
      case 4:
        quote = 'Very delicious!';
        break;
      case 5:
        quote = 'You\'re my best friend now! Can I have one more?';
        break;
      case 6:
        quote = 'So yummy!';
        break;
      case 7:
        quote = 'I am a good boy!';
        break;
    }
    return quote;
  }
  let fingorQuote = generateRandomQuote();
  return fingorQuote;
}