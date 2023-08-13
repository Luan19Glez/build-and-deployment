import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = "Iron Man";
  public age: number = 35;

  get capitalizedName():string {
    return this.name.toUpperCase()
  }

  getMethodDescription():string {
    return `${this.name} - ${this.age}`
  }

  changesName():void { 
    this.name = 'Hola Mundo'
  }

  changesAge():void { 
    this.age = 100
  }

}
