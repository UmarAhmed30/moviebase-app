import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignincontainerComponent } from './signincontainer.component';

describe('SignincontainerComponent', () => {
  let component: SignincontainerComponent;
  let fixture: ComponentFixture<SignincontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignincontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignincontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
