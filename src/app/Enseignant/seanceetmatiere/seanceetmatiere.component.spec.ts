import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceetmatiereComponent } from './seanceetmatiere.component';

describe('SeanceetmatiereComponent', () => {
  let component: SeanceetmatiereComponent;
  let fixture: ComponentFixture<SeanceetmatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceetmatiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeanceetmatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
