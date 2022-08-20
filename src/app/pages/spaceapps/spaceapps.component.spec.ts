import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceappsComponent } from './spaceapps.component';

describe('MainpageComponent', () => {
  let component: SpaceappsComponent;
  let fixture: ComponentFixture<SpaceappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceappsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
