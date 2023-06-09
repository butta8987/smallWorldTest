import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApienvService {

    // API url
    public API_Config = {
      apiUrl: environment.ApiURL,
    };


  constructor() { }
}