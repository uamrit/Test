import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverwiewComponent } from './overwiew.component';

describe('OverwiewComponent', () => {
  let component: OverwiewComponent;
  let fixture: ComponentFixture<OverwiewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverwiewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverwiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
