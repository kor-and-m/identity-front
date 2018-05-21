import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbdateScopeComponent } from './ubdate-scope.component';

describe('UbdateScopeComponent', () => {
  let component: UbdateScopeComponent;
  let fixture: ComponentFixture<UbdateScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbdateScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbdateScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
