import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerOrderComponent } from './custumer-order.component';

describe('CustumerOrderComponent', () => {
  let component: CustumerOrderComponent;
  let fixture: ComponentFixture<CustumerOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustumerOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustumerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
