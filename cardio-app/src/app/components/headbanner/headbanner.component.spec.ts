import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadbannerComponent } from './headbanner.component';

describe('HeadbannerComponent', () => {
  let component: HeadbannerComponent;
  let fixture: ComponentFixture<HeadbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadbannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
