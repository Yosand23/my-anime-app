import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRepComponent } from './main-rep.component';

describe('MainRepComponent', () => {
  let component: MainRepComponent;
  let fixture: ComponentFixture<MainRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
