import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLAComponent } from './child-la.component';

describe('ChildLAComponent', () => {
  let component: ChildLAComponent;
  let fixture: ComponentFixture<ChildLAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
