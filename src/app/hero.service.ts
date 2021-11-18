import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // MOCK WITHOUT OBSERVABLE
  // getHeroes(): Hero[] {
  //   return HEROES
  // } //////////// commento per commit di merge


  //MOCK WITH OF OBSERVABLES
  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
