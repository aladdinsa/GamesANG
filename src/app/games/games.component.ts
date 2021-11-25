import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games : Game[];
  constructor(private gameService: GameService ) {
    this.games = gameService.listeGames();
    }
  supprimerGame(p: Game){
    let conf = confirm("Are you sure?");
    if (conf)
    this.gameService.supprimerGame(p);
  }
  ngOnInit(): void {
  }
  
}