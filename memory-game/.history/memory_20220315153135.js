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
const cardsChoosen = [];

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
  if (cardsChoosen[0] == cardsChoosen[1]) {
    alert("You found a match");
  }
  console.log("check for match");
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChoosen.push(cardArray[cardId].name);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChoosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
