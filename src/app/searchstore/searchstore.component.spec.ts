import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchstoreComponent } from './searchstore.component';

describe('SearchstoreComponent', () => {
  let component: SearchstoreComponent;
  let fixture: ComponentFixture<SearchstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
