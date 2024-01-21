import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFakeComponent } from './card-fake.component';

describe('CardFakeComponent', () => {
  let component: CardFakeComponent;
  let fixture: ComponentFixture<CardFakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
