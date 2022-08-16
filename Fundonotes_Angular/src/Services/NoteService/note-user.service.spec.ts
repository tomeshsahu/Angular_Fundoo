import { TestBed } from '@angular/core/testing';

import { NoteUserService } from './note-user.service';

describe('NoteUserService', () => {
  let service: NoteUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
