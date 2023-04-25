import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfinalComponent } from './loginfinal.component';

describe('LoginfinalComponent', () => {
  let component: LoginfinalComponent;
  let fixture: ComponentFixture<LoginfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginfinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
