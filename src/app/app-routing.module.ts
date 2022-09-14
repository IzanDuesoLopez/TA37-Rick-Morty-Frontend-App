import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { SeeMoreComponent } from './see-more/see-more.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'characters',
    component:CharactersComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'seemore/:id',
    component:SeeMoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
