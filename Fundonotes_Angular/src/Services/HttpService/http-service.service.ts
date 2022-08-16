import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
baseUrl=environment.baseurl;

  constructor(private httpClient: HttpClient) { }

    postservice(url: String, reqdata: any, token: boolean=false, httpOptions: any={})
    {
        return this.httpClient.post(this.baseUrl+url,reqdata,token && httpOptions);
    }

    getservice(url:string='', token: boolean=false, httpOptions: any={})
    {
        return this.httpClient.get(this.baseUrl+url,token && httpOptions);
    }

    putService(url:string, reqdata:any, token:boolean=false, httpOptions: any = {} ){
      console.log(reqdata);
      return this.httpClient.put(this.baseUrl+url, reqdata, token && httpOptions)
    }
}

