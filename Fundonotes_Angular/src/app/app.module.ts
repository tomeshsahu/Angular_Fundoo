import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgatePasswordComponent } from './forgate-password/forgate-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CreateNoteComponent } from './create-note/create-note.component';
import { DisplayNoteComponent } from './display-note/display-note.component';
import { GetAllNotesComponent } from './get-all-notes/get-all-notes.component';
import { UpdatenoteComponent } from './updatenote/updatenote.component';
import { TrashnoteComponent } from './trashnote/trashnote.component';
import { ArchievenoteComponent } from './archievenote/archievenote.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { IconComponent } from './icon/icon.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgatePasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    DisplayNoteComponent,
    GetAllNotesComponent,
    UpdatenoteComponent,
    TrashnoteComponent,
    ArchievenoteComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
