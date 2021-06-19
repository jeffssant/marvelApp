import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { GetHeroesService } from '../service/get-heros.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'  
})
export class HomeComponent implements OnInit, AfterContentChecked {

  heroes = ['hulk', 'Spider-Man', 'wolverine'];
  detailHero: any = [];
  
  erros:number = 0

  constructor(private getHeros: GetHeroesService) {  }

  ngOnInit(): void {
    
    this.heroes.map((heroe) => {    

      this.getHeros.getHeroesId(heroe).subscribe(resp => { 
        
        var thumbnail = `${resp.thumbnail.path}/standard_fantastic.${resp.thumbnail.extension}`
        this.detailHero.push({'name': resp.name, 'stories': resp.stories.items.slice(0, 5),'thumbnail': thumbnail})

      })
      
    });
  }

  ngAfterContentChecked(): void {
    this.erros = this.getHeros.erros;
  }

}
