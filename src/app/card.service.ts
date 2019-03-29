import { Injectable } from '@angular/core';
import { Card } from './card'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  deck: Card[] = []
  suiteSymbols = ['♠︎', '♦︎', '♣︎', '♥︎']
  suites = ['spade', 'diamond', 'club', 'heart']
  cardNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  playPiles = []
  discardPiles = [[], [], [], []]
  drawnCards: Card[] = []

  constructor() {
    this.generateDeck()
  }

  generateDeck() {
    for (let i = 1; i < 14; i++) {
      for (let s = 0; s < this.suites.length; s++) {
        let suite = this.suites[s];
        let newCard = new Card
        newCard.isRed = suite === 'diamond' || suite === 'heart' ? true : false;
        newCard.suite = suite
        newCard.value = i
        newCard.name = `${this.cardNames[i - 1]}${this.suiteSymbols[s]}`
        this.deck.push(newCard)
      }
    }
    this.shuffleDeck()
  }


  shuffleDeck() {
    let timesToShuffle = 5
    for (let i = 0; i < timesToShuffle; i++) {
      let shuffledDeck: Card[] = []
      while (this.deck.length >= 1) {
        let deckIndex = Math.floor(Math.random() * this.deck.length)
        shuffledDeck.push(this.deck[deckIndex])
        this.deck.splice(deckIndex, 1)
      }
      this.deck = shuffledDeck;
    }
    this.dealDeck()
  }

  dealDeck() {
    console.log('dealing deck')
    for (let i = 0; i < 7; i++) {
      let playPile: Card[] = [];
      while (playPile.length < (i + 1)) {
        playPile.push(this.deck.shift())
      }
      this.playPiles.push(playPile)
    }
    this.drawnCards.push(this.deck.shift())
    console.log('playPiles:')
    console.log(this.playPiles)
    console.log('deck:')
    console.log(this.deck)
  }

  drawCard(){
    if (this.deck.length === 0) {
      this.deck = this.drawnCards
      this.drawnCards = []
      this.drawnCards.push(this.deck.shift())
    } else {
      this.drawnCards.push(this.deck.shift())
    }
  }

}