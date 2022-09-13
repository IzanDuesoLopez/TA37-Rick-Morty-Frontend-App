import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  title = 'characters';
  articulos:any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://rickandmortyapi.com/api/character")
      .subscribe(
        result => {
          this.articulos = result;
          console.log(this.articulos)
        },
        error => {
          console.log('problemas');
        }
      );
  }

}
