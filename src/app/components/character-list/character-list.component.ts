import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters?: Character[];
  currentCharacter: Character = {};
  currentIndex = -1;
  name = '';

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.retrieveCharacters();
  }

  retrieveCharacters(): void{
    this.characterService.getAll()
      .subscribe(
        data => {
          this.characters = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }

  refreshList(): void{
    this.retrieveCharacters();
    this.currentCharacter = {};
    this.currentIndex = -1;
  }

  setActiveCharacter(character: Character, index: number): void{
    this.currentCharacter = character;
    this.currentIndex = index;
  }

  removeAllCharacters(): void{
    this.characterService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        }
      )
  }

  searchName(): void{
    this.currentCharacter = {};
    this.currentIndex = -1;

    this.characterService.findByName(this.name)
      .subscribe(
        data => {
          this.characters = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }

}
