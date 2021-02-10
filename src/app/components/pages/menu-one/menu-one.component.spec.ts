import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuOneComponent } from './menu-one.component';

describe('MenuOneComponent', () => {
  let component: MenuOneComponent;
  let fixture: ComponentFixture<MenuOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
