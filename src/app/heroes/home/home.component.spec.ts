import { ComponentFixture, TestBed } from '@angular/core/testing';


import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientModule]     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Retorna um Array com 3 HEROES', (done) => {
    setTimeout(()=>{ 
      expect(component.detailHero.length).toBe(3);
      done(); 
    }, 3500) 
  });


  it('Retorna o numero de erros de conexão se houver', (done) => {
    setTimeout(()=>{       
      expect(component.erros).toBe(0);
      done(); 
    }, 3500) 
  });


});
