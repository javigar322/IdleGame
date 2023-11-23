import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntergalacticMarketComponent } from './intergalactic-market.component';

describe('IntergalacticMarketComponent', () => {
  let component: IntergalacticMarketComponent;
  let fixture: ComponentFixture<IntergalacticMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntergalacticMarketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntergalacticMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
