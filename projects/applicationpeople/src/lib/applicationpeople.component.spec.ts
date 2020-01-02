import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationpeopleComponent } from './applicationpeople.component';

describe('ApplicationpeopleComponent', () => {
  let component: ApplicationpeopleComponent;
  let fixture: ComponentFixture<ApplicationpeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationpeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
