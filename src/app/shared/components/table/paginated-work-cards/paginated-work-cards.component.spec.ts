import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedWorkCardsComponent } from './paginated-work-cards.component';

describe('PaginatedWorkCardsComponent', () => {
  let component: PaginatedWorkCardsComponent;
  let fixture: ComponentFixture<PaginatedWorkCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatedWorkCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatedWorkCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
