import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustangSearchComponent } from './mustang-search.component';

describe('MustangSearchComponent', () => {
  let component: MustangSearchComponent;
  let fixture: ComponentFixture<MustangSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MustangSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MustangSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
