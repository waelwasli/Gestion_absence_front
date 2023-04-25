import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationseanceComponent } from './creationseance.component';

describe('CreationseanceComponent', () => {
  let component: CreationseanceComponent;
  let fixture: ComponentFixture<CreationseanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationseanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationseanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
