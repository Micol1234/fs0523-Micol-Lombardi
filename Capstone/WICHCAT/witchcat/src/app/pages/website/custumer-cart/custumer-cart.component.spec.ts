import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerCartComponent } from './custumer-cart.component';

describe('CustumerCartComponent', () => {
  let component: CustumerCartComponent;
  let fixture: ComponentFixture<CustumerCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustumerCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustumerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
