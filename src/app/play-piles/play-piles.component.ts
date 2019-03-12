import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-play-piles',
  templateUrl: './play-piles.component.html',
  styleUrls: ['./play-piles.component.css']
})
export class PlayPilesComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

}
