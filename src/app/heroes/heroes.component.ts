import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroSerivece: HeroService) {}

  ngOnInit(): void {
    
  }


  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero){
    console.log(hero);
    this.selectedHero = hero;
  }

  
    
    

}
