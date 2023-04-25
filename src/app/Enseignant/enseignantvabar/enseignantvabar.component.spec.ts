import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantvabarComponent } from './enseignantvabar.component';

describe('EnseignantvabarComponent', () => {
  let component: EnseignantvabarComponent;
  let fixture: ComponentFixture<EnseignantvabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantvabarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignantvabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
