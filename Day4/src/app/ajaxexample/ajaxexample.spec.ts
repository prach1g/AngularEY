import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajaxexample } from './ajaxexample';

describe('Ajaxexample', () => {
  let component: Ajaxexample;
  let fixture: ComponentFixture<Ajaxexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ajaxexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ajaxexample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
