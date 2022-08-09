import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetPassword!: FormGroup;
  submited = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ResetPassword = this.formBuilder.group({
      Password: ['', Validators.required],
      Confirm: ['', Validators.required],
  })

}
onSubmit() {
  this.submited = true;

  // stop here if form is invalid
  if (this.ResetPassword.invalid) {
      return;
  }
}
}
