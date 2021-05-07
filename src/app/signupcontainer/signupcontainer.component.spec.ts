import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupcontainerComponent } from './signupcontainer.component';

describe('SignupcontainerComponent', () => {
  let component: SignupcontainerComponent;
  let fixture: ComponentFixture<SignupcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
