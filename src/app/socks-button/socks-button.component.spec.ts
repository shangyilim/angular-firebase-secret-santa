import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocksButtonComponent } from './socks-button.component';

describe('SocksButtonComponent', () => {
  let component: SocksButtonComponent;
  let fixture: ComponentFixture<SocksButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocksButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocksButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
