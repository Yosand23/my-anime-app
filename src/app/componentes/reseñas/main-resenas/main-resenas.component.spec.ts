import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainResenasComponent } from './main-resenas.component';

describe('MainResenasComponent', () => {
  let component: MainResenasComponent;
  let fixture: ComponentFixture<MainResenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainResenasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
