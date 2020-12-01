import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidSelectorComponent } from './guid-selector.component';

describe('GuidSelectorComponent', () => {
  let component: GuidSelectorComponent;
  let fixture: ComponentFixture<GuidSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
