
function changeTitles() {
  document.getElementsByTagName('h1')[0].innerHTML = "Ce que j'ai appris à THP";
  document.getElementsByTagName('p')[1].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}


function CallToActions() {
  document.querySelectorAll('p > a')[0].innerHTML = "OK je veux tester !";
  document.querySelectorAll('p > a')[0].setAttribute('href', 'http://www.thehackingproject.org');

  document.querySelectorAll('p > a')[1].innerHTML = "Non Merci";
  document.querySelectorAll('p > a')[1].setAttribute('href','https://www.pole-emploi.fr/accueil/');
}


function changeLogoName() {
  let logo = document.querySelectorAll('a > strong')[0];
  logo.innerHTML = 'The THP Experience';
  logo.classList.add('logo_name');
  logo.style.fontSize = '2em';
}


var imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];


function populateImages() {
  for(let i = 0; i < 9; i++){
    document.getElementsByClassName('card-img-top')[i].setAttribute('src', imagesArray[i]);
    // console.log(document.getElementsByTagName('img')[i].getAttribute('href'));
  }  
}

function deleteLastCards() {
  for(let i = 0; i < 3; i++){
    let a = document.querySelectorAll('div.container > div.row')[1];
    a.removeChild(a.lastElementChild);
  }  
}

function changeCardsText() {
  for(let i = 0; i < 3; i++){
    let changeCardText = document.querySelectorAll('div.card-body > p.card-text')[i];
    if (i === 0) {
      changeCardText.innerHTML = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
    } else if(i === 1) {
      changeCardText.innerHTML = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
    } else if(i === 2) {
      changeCardText.innerHTML = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
    }
  }
}

function changeViewButtons() {
  for (let i = 0; i < 6; i++) {
    document.querySelectorAll('div.btn-group')[i].children[0].classList.replace("btn-outline-secondary", "btn-success");  
  }
}

function MoveCardToDiv() {
  let newEl = document.createElement('div');
  newEl.classList.add('row');

  let parentEl = document.querySelectorAll('div.album > div.container')[0];
  parentEl.appendChild(newEl);
  // console.log(parentEl);

  let newDivEl = document.querySelectorAll('div.album > div.container > div.row')[1];

  let cardToMove = document.querySelectorAll('div.album > div.container > div.row')[0].children[2];
  // console.log(cardToMove);
  newDivEl.appendChild(cardToMove);
  
}


changeTitles();
CallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText(); 
changeViewButtons();
// MoveCardToDiv();
