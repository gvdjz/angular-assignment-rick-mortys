import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortysComponent } from './rick-and-mortys.component';

describe('RickAndMortysComponent', () => {
  let component: RickAndMortysComponent;
  let fixture: ComponentFixture<RickAndMortysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickAndMortysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickAndMortysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
