import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionabsenceComponent } from './gestionabsence.component';

describe('GestionabsenceComponent', () => {
  let component: GestionabsenceComponent;
  let fixture: ComponentFixture<GestionabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
