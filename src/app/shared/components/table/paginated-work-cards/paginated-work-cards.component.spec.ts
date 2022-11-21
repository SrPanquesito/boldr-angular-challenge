import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';

import { PaginatedWorkCardsComponent } from './paginated-work-cards.component';
import { TableService } from 'src/app/shared/services/table.service';
import { DebugElement } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PaginatedWorkCardsComponent', () => {
  let component: PaginatedWorkCardsComponent;
  let fixture: ComponentFixture<PaginatedWorkCardsComponent>;
  let table: TableService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ TableService ],
      imports: [ SharedModule ],
      declarations: [ PaginatedWorkCardsComponent ]
    })
    .compileComponents();

    table = TestBed.inject(TableService);

    fixture = TestBed.createComponent(PaginatedWorkCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onNext EventEmitter when user clicks on UI Next Button', () => {
    component.onNext.pipe(first()).subscribe((res: any) => expect(res).toBe(true));
    component.onNextEmit();
  });

  it('should get array of works from the table service', () => {
    table.works = new Array(6).fill(
      {
        DOI: "10.1007/978-1-349-19059-1_43",
        publisher: "Macmillan Education UK-London",
        type: "book-chapter",
        created: {
            "date-time": "2015-12-22T11:24:46Z",
            timestamp: 1450783486000
        },
        URL: "http://dx.doi.org/10.1007/978-1-349-19059-1_43"
      }
    );

    component.works$.pipe(first()).subscribe((res: any) => expect(res.length).toBeGreaterThan(5));
    component.ngOnInit();
  });

  it('should render grid of UI cards according to the fetched data on the TableService', () => {
    table.works = new Array(6).fill(
      {
        DOI: "10.1007/978-1-349-19059-1_43",
        publisher: "Macmillan Education UK-London",
        type: "book-chapter",
        created: {
            "date-time": "2015-12-22T11:24:46Z",
            timestamp: 1450783486000
        },
        URL: "http://dx.doi.org/10.1007/978-1-349-19059-1_43"
      }
    );

    component.works$.pipe(first()).subscribe((res: any) => {
      expect(res.length).toBe(6)

      fixture.detectChanges();
      const compiledDe: DebugElement = fixture.debugElement;
      const compiled = compiledDe.nativeElement as HTMLElement;
      expect(compiled.querySelectorAll('section ui-card').length).toBe(6);
    });
    component.ngOnInit();
  });

});
