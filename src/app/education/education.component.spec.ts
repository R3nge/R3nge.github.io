import { ComponentFixture, TestBed } from '@angular/core/testing'; //Importando Componentes
import { EducationComponent } from './education.component';

describe('EducationComponent', () => { // Puxo os componentes 
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;


  // Antes de cada teste, se certifique de que o EducationComponent está renderizado na tela e se atente pra qualquer mudança na DOM do componente
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationComponent); //Mostro eles
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //esse teste avalia se o comopnente foi criado
  it('should create', () => {
    //"espero que se o componente existir, a função retorna verdadeiro"
    expect(component).toBeFalsy();
  });
});
