import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/Services/UserService/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  submited = false;

  public showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder,private loginuser:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
  })

}
public togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}

onSubmit() {
  this.submited = true;

  // stop here if form is invalid
  if (this.login.invalid) {
      return;
  }
  let reqData={
    Email:this.login.value.Email,
    Password:this.login.value.Password,
  }
  this.loginuser.login(reqData).subscribe((response:any)=>
  {
    console.log(response);
    localStorage.setItem("token",response.data);
    this.router.navigateByUrl(''); 
  })


    
  
}
}
