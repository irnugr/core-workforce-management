import { Injectable } from '@angular/core';
import {SignUpApiService} from '../../api/sign-up/sign-up-api.service';

@Injectable({
  providedIn: 'root'
})

export class SignUpService {

  constructor(private signUpApiService: SignUpApiService) { }

  public checkUsernameAvailable(username) {
    return this.signUpApiService.checkUsernameAvailable(username);
  }

}
