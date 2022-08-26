import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOKComponent } from './dialog-o-k.component';

describe('DialogComponent', () => {
  let component: DialogOKComponent;
  let fixture: ComponentFixture<DialogOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
