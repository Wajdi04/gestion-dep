import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreAdminComponent } from './cadre-admin.component';

describe('CadreAdminComponent', () => {
  let component: CadreAdminComponent;
  let fixture: ComponentFixture<CadreAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadreAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
