/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsernameValidatorService } from './username-validator.service';

describe('Service: UsernameValidator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsernameValidatorService]
    });
  });

  it('should ...', inject([UsernameValidatorService], (service: UsernameValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
