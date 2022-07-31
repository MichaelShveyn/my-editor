import { TestBed } from '@angular/core/testing';

import { AngularMediumEditorService } from './angular-medium-editor.service';

describe('AngularMediumEditorService', () => {
  let service: AngularMediumEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularMediumEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
