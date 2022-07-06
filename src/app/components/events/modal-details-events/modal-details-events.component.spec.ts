import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailsEventsComponent } from './modal-details-events.component';

describe('ModalDetailsEventsComponent', () => {
  let component: ModalDetailsEventsComponent;
  let fixture: ComponentFixture<ModalDetailsEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailsEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
