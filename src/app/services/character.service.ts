import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

const baseUrl = 'http://localhost:3000/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Character[]>{
    return this.http.get<Character[]>(baseUrl);
  }
}
