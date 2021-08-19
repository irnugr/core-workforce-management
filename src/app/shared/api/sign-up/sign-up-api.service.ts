import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConfigApi} from '../config-api';

@Injectable({
  providedIn: 'root'
})

export class SignUpApiService {

constructor(private httpClient: HttpClient) { }

public ServiceUrl = ConfigApi.baseURL;

public checkUsernameAvailable(username) {
  return this.httpClient.get(this.ServiceUrl+`/v1/checkUsername/?username=`+username);
}

}
