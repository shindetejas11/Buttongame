import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobutnComponent } from './radiobutn.component';

describe('RadiobutnComponent', () => {
  let component: RadiobutnComponent;
  let fixture: ComponentFixture<RadiobutnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiobutnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiobutnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
