import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  title = 'characters';
  articulos:any = null;

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.articulosService.retornar()
      .subscribe(result => this.articulos = result)
  }

}
