/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignUpApiService } from './sign-up-api.service';

describe('Service: SignUpApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignUpApiService]
    });
  });

  it('should ...', inject([SignUpApiService], (service: SignUpApiService) => {
    expect(service).toBeTruthy();
  }));
});
