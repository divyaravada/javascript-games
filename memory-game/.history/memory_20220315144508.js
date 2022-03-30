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

function createBoard() {
  for (let i = 0; i < 16; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/rainbow.png");
    card.setAttribute("data-id", i);
    gridDisplay.appendChild(card);
  }
}
createBoard();

console.log(gridDisplay);
