import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public lstHeroes:string[] = ['Spider Man', 'Iron Man', 'Bat Man', 'Hulk', 'Thor'];
  public lastHeroRemoved?:string;


  removesLastHero():void{
    this.lastHeroRemoved = this.lstHeroes.pop();
  }


}
