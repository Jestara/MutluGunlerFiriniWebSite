import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogFullComponent } from './blog-full.component';

describe('BlogFullComponent', () => {
  let component: BlogFullComponent;
  let fixture: ComponentFixture<BlogFullComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
