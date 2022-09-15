import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  currentCharacter: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  }
  message = '';
  id:any;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';

    this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
    });
    this.getCharacter(this.id);
  }

  getCharacter(id: string): void{
    this.characterService.get(id)
      .subscribe(
        data => {
          this.currentCharacter = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }

  updateCharacter(): void{
    this.message = '';

    this.characterService.update(this.currentCharacter.id, this.currentCharacter)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Se ha actualizado correctamente.';
        },
        error => {
          console.log(error);
        }
      )
  }

  deleteCharacter(): void{
    this.characterService.delete(this.currentCharacter.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/characters_list']);
        },
        error => {
          console.log(error);
        }
      )
  }

}
