import { HttpHeaders } from "@angular/common/http";
import {environment} from "../../../environments/environment";

const DEV_URL = 'http://35.193.53.139:8080';
const PROD_URL = '/api';

const requestOptionsHeader = new HttpHeaders();

const requestOptionsHeaderForJson = new HttpHeaders()
    .set('Content-Type', 'application/json;charset=UTF-8')
    .set('Accept', 'application/json;charset=UTF-8');

export const ConfigApi = {
    baseURL: (environment.env_name === 'DEV') ? DEV_URL : PROD_URL,
    environment,
    requestOptionsHeader,
    requestOptionsHeaderForJson,
};