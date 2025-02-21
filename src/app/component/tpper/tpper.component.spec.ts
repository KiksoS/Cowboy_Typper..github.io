import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpperComponent } from './tpper.component';

describe('TpperComponent', () => {
  let component: TpperComponent;
  let fixture: ComponentFixture<TpperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
