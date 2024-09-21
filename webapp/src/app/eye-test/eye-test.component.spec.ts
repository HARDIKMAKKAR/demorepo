import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeTestComponent } from './eye-test.component';

describe('EyeTestComponent', () => {
  let component: EyeTestComponent;
  let fixture: ComponentFixture<EyeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EyeTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
