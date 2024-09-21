import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindClinicComponent } from './find-clinic.component';

describe('FindClinicComponent', () => {
  let component: FindClinicComponent;
  let fixture: ComponentFixture<FindClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindClinicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
