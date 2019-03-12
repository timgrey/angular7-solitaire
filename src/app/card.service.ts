import { Injectable } from '@angular/core';
import { Card } from './card'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  deck: Card[]
  suiteSymbols = ['♠︎', '♦︎', '♣︎', '♥︎']
  suites = ['spade', 'diamond', 'club', 'heart']
  cardNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  playPiles: [Card[]]
  discardPlies: [Card[]]
  drawPiles: [Card[]]


  constructor() {
    this.generateDeck()
  }

  generateDeck() {
    console.log('generating deck')
    for (let i = 1; i < 14; i++) {
      for (let s = 0; s < this.suites.length; s++) {
        let suite = this.suites[s];
        let newCard = new Card
        newCard.isRed = suite === 'diamond' || suite === 'heart' ? true : false;
        newCard.suite = suite
        newCard.value = i
        newCard.name = `${this.cardNames[i-1]}${this.suiteSymbols[s]}`
        console.log(newCard)
        // this.deck.push(newCard)
      }
    }
    this.shuffleDeck(100)
  }
  

  shuffleDeck(timesToShuffle) {
    console.log('shuffling deck')
    for (let i = 0; i < timesToShuffle; i++) {
      let shuffledDeck
      while (this.deck.length > 0) {
        let deckIndex = Math.floor(Math.random() * 52)
        shuffledDeck.push(this.deck[deckIndex])
        this.deck.splice(deckIndex, 1)
      }
      this.deck = shuffledDeck;
      console.log(this.deck)
    }
  }

  dealDeck() {
    console.log('dealing deck')
    for (let i=0; i < 7; i++) {
      let playPile = [];
      while ( this.playPiles.length < i + 1) {
        playPile.push(this.deck.shift())
      }
      this.playPiles.push(playPile)
    }
  }
}
