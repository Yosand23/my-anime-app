import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainApoyenosComponent } from './main-apoyenos.component';

describe('MainApoyenosComponent', () => {
  let component: MainApoyenosComponent;
  let fixture: ComponentFixture<MainApoyenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainApoyenosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainApoyenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
