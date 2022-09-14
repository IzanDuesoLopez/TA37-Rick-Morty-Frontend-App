import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent implements OnInit {
  title = 'characters';
  articulos:any = null;
  id:any;

  constructor(
    private articulosService: ArticulosService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.articulosService.retornar()
      .subscribe(result => this.articulos = result)

    this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
      this.id--;
    });
  }

}
