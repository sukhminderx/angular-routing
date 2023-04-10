import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLBComponent } from './child-lb.component';

describe('ChildLBComponent', () => {
  let component: ChildLBComponent;
  let fixture: ComponentFixture<ChildLBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
