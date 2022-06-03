import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailsCharactersComponent } from './modal-details-characters.component';

describe('ModalDetailsCharactersComponent', () => {
  let component: ModalDetailsCharactersComponent;
  let fixture: ComponentFixture<ModalDetailsCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailsCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailsCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
