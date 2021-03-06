import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderLinkComponent } from './app-header-link.component';

describe('AppHeaderLinkComponent', () => {
  let component: AppHeaderLinkComponent;
  let fixture: ComponentFixture<AppHeaderLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
