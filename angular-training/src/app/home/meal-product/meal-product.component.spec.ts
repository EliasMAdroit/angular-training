import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealProductComponent } from './meal-product.component';

describe('MealProductComponent', () => {
  let component: MealProductComponent;
  let fixture: ComponentFixture<MealProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
