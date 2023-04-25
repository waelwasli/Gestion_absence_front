import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantconsulteComponent } from './etudiantconsulte.component';

describe('EtudiantconsulteComponent', () => {
  let component: EtudiantconsulteComponent;
  let fixture: ComponentFixture<EtudiantconsulteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantconsulteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantconsulteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
