import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationKitchenComponent } from './moderation-kitchen.component';

describe('ModerationKitchenComponent', () => {
  let component: ModerationKitchenComponent;
  let fixture: ComponentFixture<ModerationKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModerationKitchenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModerationKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
