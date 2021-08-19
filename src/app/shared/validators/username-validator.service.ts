import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import {SignUpService} from '../service/sign-up/sign-up.service';

@Injectable({
  providedIn: 'root'
})
export class UsernameValidatorService {

  debouncer: any;

  constructor(public signUpService: SignUpService) { }

  checkUsername(control: FormControl): any {
    clearTimeout(this.debouncer);

    return new Promise(resolve => {
          this.debouncer = setTimeout(() => {
            this.signUpService.checkUsernameAvailable(control.value).subscribe((res:any) => {
              if(res.usernamestatus === 'not found') {
                resolve(null);
              } else {
                resolve({'usernameInUse': true});
              }
            });
          },500
        );
      });
  }

}
