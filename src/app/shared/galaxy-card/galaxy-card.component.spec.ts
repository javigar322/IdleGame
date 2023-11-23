import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyCardComponent } from './galaxy-card.component';

describe('GalaxyCardComponent', () => {
  let component: GalaxyCardComponent;
  let fixture: ComponentFixture<GalaxyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalaxyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalaxyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
