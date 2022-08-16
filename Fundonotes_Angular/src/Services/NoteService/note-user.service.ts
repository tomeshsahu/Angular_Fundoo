import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../HttpService/http-service.service';


@Injectable({
  providedIn: 'root'
})
export class NoteUserService {

  token:any;

  constructor(private httpService:HttpServiceService) { 
    this.token=localStorage.getItem('token');
    console.log(this.token);
  }
  createNote(reqdata: any)
  {
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':"Bearer "+this.token
      })
    }

    return this.httpService.postservice('/Note/AddNote',reqdata,true,header)
}

getAllNote()
{
  let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':"Bearer "+this.token
    })
  }

  return this.httpService.getservice('/Note/GetAllNote',true,header)
}

updatenoteservice(NoteId:number,reqdata:any)
{
  console.log("note servie",reqdata)
  console.log("note id",NoteId)

  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer "+this.token
    })
  }
  return this.httpService.putService(`/Note/UpdateNote/${NoteId}`, reqdata, true, headers);
}


TrashNote(reqdata:any)
{
  console.log("req data is"+reqdata)

  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer "+this.token
    })
  }
  return this.httpService.putService('/Note/TrashNote',reqdata,true,headers);
}

}





