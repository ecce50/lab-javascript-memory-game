class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(arr) {
    let x = 0; //random number
    let y = 0; //temp number
    for (let i = 0; i < arr.length; i += 1) {
      x = Math.floor(Math.random() * arr.length);
      y = arr[x]; //random array index
      arr[x] = arr[arr.length]; //random array index moved to end of array
      arr[arr.length] = y; //
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else  {
      return false;
    }
  }
}
