document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "01",
      img: "images/01.png",
    },
    {
      name: "01",
      img: "images/01.png",
    },
    {
      name: "02",
      img: "images/02.png",
    },
    {
      name: "02",
      img: "images/02.png",
    },
    {
      name: "03",
      img: "images/03.png",
    },
    {
      name: "03",
      img: "images/03.png",
    },
    {
      name: "04",
      img: "images/04.png",
    },
    {
      name: "04",
      img: "images/04.png",
    },
    {
      name: "05",
      img: "images/05.png",
    },
    {
      name: "05",
      img: "images/05.png",
    },
    {
      name: "06",
      img: "images/06.png",
    },
    {
      name: "06",
      img: "images/06.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/cover.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  createBoard();

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosen[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations!";
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 200);
    }
  }
});
