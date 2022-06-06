import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustangsComponent } from './mustangs.component';

describe('MustangsComponent', () => {
  let component: MustangsComponent;
  let fixture: ComponentFixture<MustangsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MustangsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MustangsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
