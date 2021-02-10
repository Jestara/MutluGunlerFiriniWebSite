import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeThreeComponent } from './home-three.component';

describe('HomeThreeComponent', () => {
  let component: HomeThreeComponent;
  let fixture: ComponentFixture<HomeThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
