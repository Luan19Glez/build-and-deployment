import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterLst: Character[] = [];

  @Output()
  public characterID: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void {
    this.characterID.emit(id);
  }

}
