import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailsComicsComponent } from './modal-details-comics.component';

describe('ModalDetailsComicsComponent', () => {
  let component: ModalDetailsComicsComponent;
  let fixture: ComponentFixture<ModalDetailsComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailsComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailsComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
