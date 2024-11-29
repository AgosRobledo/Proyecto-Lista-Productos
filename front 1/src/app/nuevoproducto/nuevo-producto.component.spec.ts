import { ComponentFixture, TestBed } from '@angular/core/testing';
import { nuevoproducto } from '../nuevoproducto/nuevo-producto.component';


describe('NuevoProductoComponent', () => {
  let component: nuevoproducto;
  let fixture: ComponentFixture<nuevoproducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [nuevoproducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(nuevoproducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
