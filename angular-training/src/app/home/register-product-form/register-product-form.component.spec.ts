import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProductFormComponent } from './register-product-form.component';

describe('RegisterProductFormComponent', () => {
  let component: RegisterProductFormComponent;
  let fixture: ComponentFixture<RegisterProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterProductFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
