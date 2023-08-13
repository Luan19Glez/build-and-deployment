import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.services';
import { Character } from '../interfaces/character.interfaces';

@Component({
    selector: 'app-dbz-main-pages',
    templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {
    
    constructor(private dbzService: DBZService){  }
    
    get characters(): Character[] {
        return [...this.dbzService.character];
    }

    onDeleteCharacterById( id:string ):void {
        this.dbzService.onDeleteCharacter(id);
    }

    onNewCharacter( character: Character ):void {
        this.dbzService.addCharacter(character);
    }



}