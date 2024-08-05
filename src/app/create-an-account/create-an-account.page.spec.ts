import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAnAccountPage } from './create-an-account.page';

describe('CreateAnAccountPage', () => {
  let component: CreateAnAccountPage;
  let fixture: ComponentFixture<CreateAnAccountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
