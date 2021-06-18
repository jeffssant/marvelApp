import { Component, OnInit } from '@angular/core';
import { GetHeroesService, Thumbnail } from '../service/get-heros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroes = ['hulk', 'Spider-Man', 'wolverine'];
  detalheHeroes: any = [];

  constructor(private getHeros: GetHeroesService) { }

  ngOnInit(): void {
    this.heroes.map((heroe) => {
      
      this.getHeros.getHeroesId(heroe).subscribe(resp => { 
        
        var thumbnail = `${resp.thumbnail.path}/portrait_uncanny.${resp.thumbnail.extension}`
        this.detalheHeroes.push({'name': resp.name, 'stories': resp.stories.items,'thumbnail': thumbnail})

      })
      
    });

  }

  


}
