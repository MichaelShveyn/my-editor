import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMediumEditorComponent } from './angular-medium-editor.component';

describe('AngularMediumEditorComponent', () => {
  let component: AngularMediumEditorComponent;
  let fixture: ComponentFixture<AngularMediumEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMediumEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMediumEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
