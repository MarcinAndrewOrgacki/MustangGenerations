import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustangDetailComponent } from './mustang-detail.component';

describe('MustangDetailComponent', () => {
  let component: MustangDetailComponent;
  let fixture: ComponentFixture<MustangDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MustangDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MustangDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
