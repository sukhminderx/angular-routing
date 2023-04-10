import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1BComponent } from './child1-b.component';

describe('Child1BComponent', () => {
  let component: Child1BComponent;
  let fixture: ComponentFixture<Child1BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1BComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
