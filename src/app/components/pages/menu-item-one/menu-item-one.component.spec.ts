import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuItemOneComponent } from './menu-item-one.component';

describe('MenuItemOneComponent', () => {
  let component: MenuItemOneComponent;
  let fixture: ComponentFixture<MenuItemOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
