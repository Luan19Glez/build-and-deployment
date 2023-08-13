import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DBZService {
    
    public character: Character[] = [
        { id: uuid(), name: "Goku",   power: 10000},
        { id: uuid(), name: "Vegeta", power:  9000},
        { id: uuid(), name: "Trunks", power:  7000}
    ];

    public addCharacter( characterEmit:Character ): void {
        const newCharacter : Character = { id: uuid(), ...characterEmit};
        this.character.push(newCharacter);
    }

    public onDeleteCharacter( id:string ): void {
        this.character = this.character.filter( x => x.id != id);
    }    
}