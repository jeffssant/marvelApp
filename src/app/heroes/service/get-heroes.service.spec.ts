import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';


import { GetHeroesService } from './get-heros.service';


describe('GetHeroesService', () => {
  let service: GetHeroesService;  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[GetHeroesService]
    });
    service = TestBed.get(GetHeroesService);
  });

  it('Devera retornar HERO HULK como objeto', async (done) => {
    service.getHeroesId('hulk').subscribe(resp => {     
        expect(resp.name).toBe('Hulk'); 
        done(); 
    });
  });

  it('Devera retornar um erro', async ()  => {
    try {
      const resp = await service.getHeroesId('').toPromise();
      expect(resp.name).toContain('error');      
  } catch (err) {
      expect(err.name).toBe('HttpErrorResponse');
  }
  });
});
