import { Injectable } from '@angular/core';
import { Game } from '../model/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games : Game[];
  game : Game;
  constructor() {
    this.games = [
      {idGame : 1, nomGame : "Red Dead Redemption 2", priceGame : 180, dateCreation : new Date("01/14/2011")},
      {idGame : 2, nomGame : "Resident Evil 2", priceGame : 120, dateCreation : new Date("12/17/2010")},
      {idGame : 3, nomGame :"Grand Theft Auto V", priceGame : 60, dateCreation : new Date("02/20/2020")}
    ];   
  }
  listeGames():Game[] {
    return this.games;
}
ajouterGame( prod: Game){
this.games.push(prod);
}
supprimerGame( prod: Game){

  const index = this.games.indexOf(prod, 0);
  if (index > -1) {
  this.games.splice(index, 1);
  }
  }
  consulterGame(id:number): Game{
    this.game = this.games.find(p => p.idGame == id);
    return this.game;
  }
  updateGame(p:Game)
{
// console.log(p);
this.supprimerGame(p);
this.ajouterGame(p);
this.trierGames();
}



trierGames(){
  this.games = this.games.sort((n1,n2) => {
  if (n1.idGame > n2.idGame) {
  return 1;
  }
  if (n1.idGame < n2.idGame) {
  return -1;
  }
  return 0;
  });
  }
}

