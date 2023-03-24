import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponenetComponent } from './favorites-componenet.component';

describe('FavoritesComponenetComponent', () => {
  let component: FavoritesComponenetComponent;
  let fixture: ComponentFixture<FavoritesComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesComponenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
