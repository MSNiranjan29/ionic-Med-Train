import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchivedCoursesPage } from './archived-courses.page';

describe('ArchivedCoursesPage', () => {
  let component: ArchivedCoursesPage;
  let fixture: ComponentFixture<ArchivedCoursesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
