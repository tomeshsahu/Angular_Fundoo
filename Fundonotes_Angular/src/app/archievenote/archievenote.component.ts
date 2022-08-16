import { Component, OnInit } from '@angular/core';
import { NoteUserService } from 'src/Services/NoteService/note-user.service';

@Component({
  selector: 'app-archievenote',
  templateUrl: './archievenote.component.html',
  styleUrls: ['./archievenote.component.scss']
})
export class ArchievenoteComponent implements OnInit {
  notesArray:any;
  notesData:any;
  message:any;

  constructor(private noteservice:NoteUserService) { }
    
  ngOnInit(): void {
    this.GetAllArchieve();
  }
  GetAllArchieve()
  {
    this.noteservice.getAllNote().subscribe((request:any) => {
      console.log("request data",request);
      this.notesArray=request.data;
      this.notesArray.reverse();
      console.log("Note Array",this.notesArray);
      return this.notesArray;
    });
  }
  
}

