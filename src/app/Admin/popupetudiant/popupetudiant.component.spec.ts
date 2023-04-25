import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupetudiantComponent } from './popupetudiant.component';

describe('PopupetudiantComponent', () => {
  let component: PopupetudiantComponent;
  let fixture: ComponentFixture<PopupetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
