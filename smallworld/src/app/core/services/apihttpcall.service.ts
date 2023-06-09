import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, retryWhen, timer } from 'rxjs';
import { ApienvService } from 'src/app/core/services/apienv.service';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient, private ApienvService: ApienvService) { }

  async get(url: string, options?: any) {
    let result: any;
    const request_options = this.headerSetup('application/json');
    
    await this.http.get(this.ApienvService.API_Config.apiUrl + url, request_options).pipe(
      retry({ count: 2, delay: this.shouldRetry })
    ).toPromise().then(async(resp) => {
      result = await resp;
    })
    .catch((error) => {
      result = error;
    });

    return result;
  }

  async post(url: string, data: any, options?: any) 
  {
    let result: any;
    let request_options = this.headerSetup('application/json');
    await this.http.post(this.ApienvService.API_Config.apiUrl + url, data, request_options).pipe(
      retry({ count: 2, delay: this.shouldRetry })
    )
    .toPromise().then(async(resp:any) => {
      result = await resp;
    })
    .catch((error) => {
      result = error;
    });
    
    return result;

  }

  async put(url: string, data: any, options?: any) {
    let result: any;
    //const request_options = this.headerSetup('application/json');
    await this.http.put(this.ApienvService.API_Config.apiUrl + url, data, options).pipe(
      retry({ count: 2, delay: this.shouldRetry })
    ).toPromise().then(async(resp) => {
      result = await resp;
    })
    .catch((error) => {
      result = error;
    });

    return result;
  }

  async delete(url: string, options?: any) {
    let result: any;

    await this.http.delete(this.ApienvService.API_Config.apiUrl + url, options).pipe(
      retry({ count: 2, delay: this.shouldRetry })
    ).toPromise().then(async(resp) => {
      result = await resp;
    })
    .catch((error) => {
      result = error;
    });

    return result;
  }

  shouldRetry(error: HttpErrorResponse) {
    // Example for catching specific error code as well
    if (error.status === 503 || error.status === 0) {
      return timer(1000); // Adding a timer from RxJS to return observable to delay param.
    }
    throw error;
  }

  headerSetup(contentType: any){

    const headerObj = {
      //'Content-Type': contentType,
       enctype: contentType,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept'
    };


    const obj = Object.assign({}, headerObj);
    const httpHeaders = new HttpHeaders(obj);
    return { headers: httpHeaders };
  }
}