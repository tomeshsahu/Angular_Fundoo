import { Component, OnInit,Input } from '@angular/core';
import { NoteUserService } from 'src/Services/NoteService/note-user.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
@Input() notecard:any;
reqdata:any;
  constructor(private noteservice:NoteUserService) { }

  ngOnInit(): void {
    
  }

  TrashNote()
  {
    this.reqdata=this.notecard.noteId;
    console.log("noteid "+this.reqdata);

    this.noteservice.TrashNote(this.reqdata).subscribe((response: any) => {
      console.log(response);
    })
  }



}

