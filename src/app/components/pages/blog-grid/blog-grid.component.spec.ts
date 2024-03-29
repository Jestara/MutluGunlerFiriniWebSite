import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogGridComponent } from './blog-grid.component';

describe('BlogGridComponent', () => {
  let component: BlogGridComponent;
  let fixture: ComponentFixture<BlogGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
