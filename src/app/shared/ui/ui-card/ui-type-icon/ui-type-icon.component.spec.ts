import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTypeIconComponent } from './ui-type-icon.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('UiTypeIconComponent', () => {
  let component: UiTypeIconComponent;
  let fixture: ComponentFixture<UiTypeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTypeIconComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTypeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
