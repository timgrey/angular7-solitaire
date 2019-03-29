import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service'

@Component({
  selector: 'app-draw-piles',
  templateUrl: './draw-piles.component.html',
  styleUrls: ['./draw-piles.component.css']
})
export class DrawPilesComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

}
