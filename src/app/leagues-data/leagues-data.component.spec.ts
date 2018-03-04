import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesDataComponent } from './leagues-data.component';

describe('LeaguesDataComponent', () => {
  let component: LeaguesDataComponent;
  let fixture: ComponentFixture<LeaguesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
