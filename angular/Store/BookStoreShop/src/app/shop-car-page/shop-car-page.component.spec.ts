import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCarPageComponent } from './shop-car-page.component';

describe('ShopCarPageComponent', () => {
  let component: ShopCarPageComponent;
  let fixture: ComponentFixture<ShopCarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCarPageComponent]
    });
    fixture = TestBed.createComponent(ShopCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
