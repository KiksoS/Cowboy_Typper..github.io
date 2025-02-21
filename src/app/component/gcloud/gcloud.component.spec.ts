import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcloudComponent } from './gcloud.component';

describe('GcloudComponent', () => {
  let component: GcloudComponent;
  let fixture: ComponentFixture<GcloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GcloudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
