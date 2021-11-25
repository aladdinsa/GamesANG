import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styles: []
})
export class UpdateGameComponent implements OnInit {
  currentGame = new Game();
  constructor(private activatedRoute: ActivatedRoute, private router :Router, private gameService: GameService) {
    
   }

  ngOnInit(): void {
    this.currentGame = this.gameService.consulterGame(this.activatedRoute.snapshot.params.id);

  }
  updateGame()
  { 
  this.gameService.updateGame(this.currentGame);
  this.router.navigate(['games']);

  }
  
}