import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiscardPilesComponent } from './discard-piles/discard-piles.component';
import { DrawPilesComponent } from './draw-piles/draw-piles.component';
import { PlayPilesComponent } from './play-piles/play-piles.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscardPilesComponent,
    DrawPilesComponent,
    PlayPilesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
