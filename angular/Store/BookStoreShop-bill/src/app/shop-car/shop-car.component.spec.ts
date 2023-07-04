import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCarComponent } from './shop-car.component';

describe('ShopCarComponent', () => {
  let component: ShopCarComponent;
  let fixture: ComponentFixture<ShopCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCarComponent]
    });
    fixture = TestBed.createComponent(ShopCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
