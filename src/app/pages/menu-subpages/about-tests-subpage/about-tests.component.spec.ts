import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTestsComponent } from './about-tests.component';

describe('TestsSubpageComponent', () => {
  let component: AboutTestsComponent;
  let fixture: ComponentFixture<AboutTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
