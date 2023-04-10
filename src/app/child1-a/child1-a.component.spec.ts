import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1AComponent } from './child1-a.component';

describe('Child1AComponent', () => {
  let component: Child1AComponent;
  let fixture: ComponentFixture<Child1AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1AComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
