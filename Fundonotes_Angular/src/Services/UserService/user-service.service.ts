
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpServiceService) { }

  registration(reqdata: any)
  {
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }

    return this.httpService.postservice('/api/User/AddUser',reqdata,false,header)
  }

  login(reqData:any)
  {
    console.log(reqData);
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postservice('/api/User/LoginUser',reqData,false,header)
  }

  forgatepass(reqData:any)
  {
    console.log(reqData);
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postservice(`/api/User/ForgetPassword/${reqData.email}`,reqData,false,header)
  }
 }



