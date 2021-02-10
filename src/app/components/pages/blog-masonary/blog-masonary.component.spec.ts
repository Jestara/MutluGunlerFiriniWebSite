import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogMasonaryComponent } from './blog-masonary.component';

describe('BlogMasonaryComponent', () => {
  let component: BlogMasonaryComponent;
  let fixture: ComponentFixture<BlogMasonaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogMasonaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMasonaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
