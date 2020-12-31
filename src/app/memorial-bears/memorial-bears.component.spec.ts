import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialBearsComponent } from './memorial-bears.component';

describe('MemorialBearsComponent', () => {
  let component: MemorialBearsComponent;
  let fixture: ComponentFixture<MemorialBearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemorialBearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorialBearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
