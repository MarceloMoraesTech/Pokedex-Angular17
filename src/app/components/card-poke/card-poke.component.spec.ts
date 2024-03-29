import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPokeComponent } from './card-poke.component';

describe('CardPokeComponent', () => {
  let component: CardPokeComponent;
  let fixture: ComponentFixture<CardPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPokeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
