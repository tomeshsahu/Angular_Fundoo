import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  closecard:boolean=false;
    showFiller = false;
    selectedMenu:any='Home';


   
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  goTo(paramText:string){
    this.selectedMenu = paramText;
  }
  opencard()
  {
    this.closecard=!this.closecard;
  }

  notes()
  {
    this.router.navigateByUrl('home/notes');
  }
  trash()
  {
    this.router.navigateByUrl('/home/trash'); 
  }
  archive()
  {
    this.router.navigateByUrl('/home/archive'); 
  }

}
