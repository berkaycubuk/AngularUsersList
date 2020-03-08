import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardLgComponent } from './user-card-lg.component';

describe('UserCardLgComponent', () => {
  let component: UserCardLgComponent;
  let fixture: ComponentFixture<UserCardLgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardLgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
