///////////////////////////////////////////////////////////////
/////////////////////////Exo 1 et 1-bis////////////////////////
///////////////////////////////////////////////////////////////
const footer = document.querySelector("footer")

footer.addEventListener('click', event => {
  console.group("Clique");
  console.count (`Clic numéro`);
  console.groupEnd();
});

///////////////////////////////////////////////////////////////
/////////////////////////Exo-2/////////////////////////////////
///////////////////////////////////////////////////////////////

// Récupe le bouton de la navbar
const Menu = document.querySelector(".navbar-toggler")

//Récupe la navbar cacher 
const navbarHeader = document.getElementById("navbarHeader")

// add l'event au bouton pour que la navbar spawn
Menu.addEventListener("click", event => {
  navbarHeader.classList.toggle("collapse")
})

///////////////////////////////////////////////////////////////
/////////////////////////Exo-3/////////////////////////////////
///////////////////////////////////////////////////////////////

//Récup toutes les cartes
const cards = document.getElementsByClassName("card")

//on prend la premeier carte
cards[0]

//on cherche le bouton edit
.querySelector(".btn-outline-secondary")

//j'add l'event click au bouton edit
.addEventListener("click" ,event =>{

  //le fait de refaire un cards[0] permet de selection sur quel catre le bouton va avoir un effet 
cards[0].setAttribute("style", "color: red")
});


///////////////////////////////////////////////////////////////
/////////////////////////Exo-4/////////////////////////////////
///////////////////////////////////////////////////////////////

//on prend la premeier carte
cards[2]

//on cherche le bouton edit
.querySelector(".btn-outline-secondary")

//j'add l'event click au bouton edit
.addEventListener("click" ,() =>{
  //si la carte 2 a un style color === vert alors je le cancel quand je click sur le bouton 
if (cards[2].style.color === 'green'){
  cards[2].style.color = '' ;
}else //sinon je le passe en vert
  cards[2].style.color = 'green'
});


///////////////////////////////////////////////////////////////
/////////////////////////Exo-5/////////////////////////////////
///////////////////////////////////////////////////////////////

const header = document.querySelector('header')
const head = document.querySelector('link')

header.addEventListener('dblclick', event =>{
  if (head.disabled === true){
    head.disabled = false
  }
  else {
    head.disabled = true
  }
})


///////////////////////////////////////////////////////////////
/////////////////////////Exo-6/////////////////////////////////
///////////////////////////////////////////////////////////////


try{



  let cards_array = document.querySelectorAll("div.card");

  for (let i = 0; i <= cards_array.length; i++) {
    let currentCard = cards_array[i];
    let viewButton = currentCard.querySelector("button.btn-success");
    let paragraph = currentCard.querySelector("p.card-text");
    let img = currentCard.querySelector("img.card-img-top");
    let imgLittle = false;

    viewButton.addEventListener("mouseover", (event) => {
      if (imgLittle === false) {
        paragraph.classList.toggle("collapse");
        img.style.width = "20%";
        imgLittle = true;
      } else {
        paragraph.classList.toggle("collapse");
        img.removeAttribute("style");
        imgLittle = false;
      }
    });
  }
}
catch(e){

}


///////////////////////////////////////////////////////////////
/////////////////////////Exo-7/////////////////////////////////
///////////////////////////////////////////////////////////////
let rightButton = document.querySelector(
  "section.jumbotron div.container a.btn-secondary"
);



rightButton.addEventListener("click", event =>{
  
  let cardsWrappers = document.querySelector("main div.container div.row");

  let cardsArray2 = cardsWrappers.children

  let firstChilds = cardsArray2[0];
  let length = cardsArray2.length;
  let lastchild = cardsArray2[length -1];

  cardsWrappers.insertBefore(lastchild, firstChilds)

})





///////////////////////////////////////////////////////////////
/////////////////////////Exo-8/////////////////////////////////
///////////////////////////////////////////////////////////////


let leftButton = document.querySelector("a.btn-primary")

leftButton.href='#';


leftButton.addEventListener("click", (event) => {

  let cardsWrapper = document.querySelector("main div.container div.row");

  let cardsArray = cardsWrapper.children;

  let firstChild = cardsArray[0];

  cardsWrapper.appendChild(firstChild);
  
});

