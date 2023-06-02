import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputProjectComponent } from './input-project.component';

describe('InputProjectComponent', () => {
  let component: InputProjectComponent;
  let fixture: ComponentFixture<InputProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputProjectComponent]
    });
    fixture = TestBed.createComponent(InputProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
