import { Component, OnInit } from '@angular/core';
import { NoteUserService } from 'src/Services/NoteService/note-user.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notesArray:any;
  notesData:any;
  message:any;

  public suscription:any;
  constructor(private noteservice:NoteUserService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes()
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
  