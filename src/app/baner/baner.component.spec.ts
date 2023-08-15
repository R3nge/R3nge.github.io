import { ComponentFixture, TestBed } from '@angular/core/testing'; //Importações Necessárias para os Testes
import { BanerComponent } from './baner.component';

describe('BanerComponent', () => { //Componentes do Banner 
  let component: BanerComponent;
  let fixture: ComponentFixture<BanerComponent>;

  beforeEach(async () => { //Declara o Banner
    await TestBed.configureTestingModule({
      declarations: [ BanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
