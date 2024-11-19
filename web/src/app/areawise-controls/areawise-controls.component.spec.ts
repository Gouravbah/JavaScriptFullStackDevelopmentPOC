import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreawiseControlsComponent } from './areawise-controls.component';

describe('AreawiseControlsComponent', () => {
  let component: AreawiseControlsComponent;
  let fixture: ComponentFixture<AreawiseControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreawiseControlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreawiseControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
