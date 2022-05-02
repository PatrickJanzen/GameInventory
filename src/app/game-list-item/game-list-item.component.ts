import {Component, OnInit, Input} from '@angular/core';
import {Game} from '../data/game';


@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss'],
})
export class GameListItemComponent implements OnInit {
  @Input() game: Game;

  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
