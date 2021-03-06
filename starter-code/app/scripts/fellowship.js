console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1

 var middleEarth = document.createElement('section'); 

function makeMiddleEarth() {
  
   middleEarth.setAttribute('id','middle-earth');
   console.log(middleEarth);
  for (var i = 0; i < lands.length; i++){
      var article = document.createElement('article');
      var h1 = document.createElement('h1');
      h1.textContent = lands[i];
      middleEarth.appendChild(article);
      article.appendChild(h1);
      body.appendChild(middleEarth);
  }
 
}

makeMiddleEarth();


// Part 2

var shire = body.getElementsByTagName('article')[0];
var rivendell = body.getElementsByTagName('article')[1];
var mordor = body.getElementsByTagName('article')[2];


function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
    //create an element with the tag ul to contain our hobbits!
    var target = document.createElement('ul');
    //for each of the hobbits in the list of hobbit names, create an element for it!
    for (var i = 0; i < hobbits.length; i++){
      //create the list element for the current hobbit in the list!
      var list = document.createElement('li');
      //get the name of the current hobbit in the list and set that name to the element item's text
      list.className = 'hobbit';
      list.textContent = hobbits[i];
      //stick the new list item onto the ul element!
      target.appendChild(list);
    }
 
    //stick the ul element that contains our hobbits to the shire element!
    shire.appendChild(target);
    
}

  makeHobbits();


// Part 3
var frodo = body.querySelectorAll('li')[0];

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement('div');
  theRing.setAttribute('id','the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
 frodo.appendChild(theRing);

}

keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var lion = document.createElement('ul');
   
    for (var i = 0; i < buddies.length; i++){
      var tiger = document.createElement('li');
      tiger.textContent = buddies[i];
      lion.appendChild(tiger);

  // insert your aside as a child element of rivendell
}

aside.appendChild(lion);

rivendell.appendChild(aside);

}
makeBuddies();

// Part 5
var Strider = rivendell.getElementsByTagName('li')[3];

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  Strider.textContent = 'Aragorn';
}

beautifulStranger();

// Part 6

/*function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbits[0]);
}
leaveTheShire();

// Part 7
*/

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
