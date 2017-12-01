import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SockDialogComponent } from './sock-dialog.component';

describe('SockDialogComponent', () => {
  let component: SockDialogComponent;
  let fixture: ComponentFixture<SockDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SockDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SockDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
