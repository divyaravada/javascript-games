const cardArray = [
  {
    name: "redcar",
    img: "images/redcar.png",
  },
  {
    name: "whitecar",
    img: "images/whitecar.png",
  },
  {
    name: "yellowcar",
    img: "images/yellowcar.jpg",
  },
  {
    name: "purplecar",
    img: "images/purplecar.png",
  },
  {
    name: "greencar",
    img: "images/greencar.png",
  },
  {
    name: "browncar",
    img: "images/browncar.png",
  },
  {
    name: "bluecar",
    img: "images/bluecar.jpg",
  },
  {
    name: "blackcar",
    img: "images/blackcar.png",
  },
  {
    name: "redcar",
    img: "images/redcar.png",
  },
  {
    name: "whitecar",
    img: "images/whitecar.png",
  },
  {
    name: "yellowcar",
    img: "images/yellowcar.jpg",
  },
  {
    name: "purplecar",
    img: "images/purplecar.png",
  },
  {
    name: "greencar",
    img: "images/greencar.png",
  },
  {
    name: "browncar",
    img: "images/browncar.png",
  },
  {
    name: "bluecar",
    img: "images/bluecar.jpg",
  },
  {
    name: "blackcar",
    img: "images/blackcar.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
let cardsChoosen = [];
let cardsChoosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/rainbow.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelector("img");
  const optionOneId = cardsChoosenIds[0];
  const optionTwoId = cardsChoosenIds[1];

  if (cardsChoosen[0] == cardsChoosen[1]) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChoosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/rainbow.png");
    cards[optionTwoId].setAttribute("src", "images/rainbow.png");
    alert("Sorry Try again!");
  }
  cardsChoosen = [];
  cardsChoosenIds = [];
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChoosen.push(cardArray[cardId].name);
  cardsChoosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChoosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
