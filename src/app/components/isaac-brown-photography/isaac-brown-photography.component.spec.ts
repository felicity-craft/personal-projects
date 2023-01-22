import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaacBrownPhotographyComponent } from './isaac-brown-photography.component';

describe('IsaacBrownPhotographyComponent', () => {
  let component: IsaacBrownPhotographyComponent;
  let fixture: ComponentFixture<IsaacBrownPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsaacBrownPhotographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsaacBrownPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
