import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryCodeModalPage } from './country-code-modal.page';

describe('CountryCodeModalPage', () => {
  let component: CountryCodeModalPage;
  let fixture: ComponentFixture<CountryCodeModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCodeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
