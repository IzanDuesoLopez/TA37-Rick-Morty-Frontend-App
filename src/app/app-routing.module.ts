import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { HomeComponent } from './home/home.component';
import { SeeMoreComponent } from './see-more/see-more.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'seemore/:id',
    component:SeeMoreComponent
  },
  {path: '', redirectTo: 'characters', pathMatch: 'full'},
  {path: 'characters', component: CharactersComponent},
  {path: 'characters_list', component: CharacterListComponent},
  {path: 'characters_list/:id', component: CharacterDetailsComponent},
  {path: 'add', component: AddCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
