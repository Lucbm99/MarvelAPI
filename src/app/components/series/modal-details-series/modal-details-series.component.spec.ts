import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailsSeriesComponent } from './modal-details-series.component';

describe('ModalDetailsSeriesComponent', () => {
  let component: ModalDetailsSeriesComponent;
  let fixture: ComponentFixture<ModalDetailsSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailsSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailsSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
