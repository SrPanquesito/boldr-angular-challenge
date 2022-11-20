import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiDarkmodeButtonComponent } from './ui-darkmode-button.component';

describe('UiDarkmodeButtonComponent', () => {
  let component: UiDarkmodeButtonComponent;
  let fixture: ComponentFixture<UiDarkmodeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDarkmodeButtonComponent ],
      imports: [ FontAwesomeModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDarkmodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
