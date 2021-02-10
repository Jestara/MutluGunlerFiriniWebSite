import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuItemTwoComponent } from './menu-item-two.component';

describe('MenuItemTwoComponent', () => {
  let component: MenuItemTwoComponent;
  let fixture: ComponentFixture<MenuItemTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
