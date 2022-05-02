import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService} from '../services/data.service';
import {Game} from '../data/game';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.page.html',
  styleUrls: ['./view-game.page.scss'],
})
export class ViewGamePage implements OnInit {
  public game: Game;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.game = this.data.getGameById(parseInt(id,10));
  }
}
