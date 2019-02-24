
// Combien y a-t-il d'éléments <p> présents dans la page HTML ?

console.log(document.getElementsByTagName('p').length);

// Quel est le contenu texte de l'élément portant l'id coucou ?


console.log(document.getElementById('coucou'));

// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?

console.log(document.getElementsByTagName('a')[2].getAttribute('href'));

// Combien d'éléments portent la classe compte-moi ?

console.log(document.getElementsByClassName('compte-moi'));

// Combien d'éléments <li> portent la classe compte-moi ?

console.log(document.querySelectorAll('li.compte-moi').length);

// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?

console.log(document.querySelectorAll('ol > li.compte-moi').length);

// La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. 

console.log(document.querySelectorAll(' div > ul')[1].children[0]);

