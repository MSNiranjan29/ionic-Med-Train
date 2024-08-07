import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAnAccount1Page } from './create-an-account1.page';

describe('CreateAnAccount1Page', () => {
  let component: CreateAnAccount1Page;
  let fixture: ComponentFixture<CreateAnAccount1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnAccount1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
