import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteUserService } from 'src/Services/NoteService/note-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  notedata: any;

  constructor(@Inject(MAT_DIALOG_DATA)public data: any, public dialogbox: MatDialogRef<UpdatenoteComponent>,private note:NoteUserService,private snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.notedata = this.data.selectednote;
  }

  closenote(title: string, description: string) {
    let NoteId = this.notedata.noteId;
    console.log(NoteId);
    let reqData = {
      title: title,
      description: description,
      bgcolor: "yellow"
    }
    
    this.note.updatenoteservice(NoteId,reqData).subscribe((response: any) => {
      console.log(response);
    })

    this.dialogbox.close();
    this.snackbar.open("Note Updated Successfully","",{
      duration:2000,
    });
    this.router.navigate(['/home']);

}
}
