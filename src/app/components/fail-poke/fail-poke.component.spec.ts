import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailPokeComponent } from './fail-poke.component';

describe('FailPokeComponent', () => {
  let component: FailPokeComponent;
  let fixture: ComponentFixture<FailPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailPokeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FailPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
