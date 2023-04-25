import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminnavbarComponent } from './Admin/adminnavbar/adminnavbar.component';
import { PopupetudiantComponent } from './Admin/popupetudiant/popupetudiant.component';
import { AdminpageComponent } from './Admin/adminpage/adminpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from './Login/login/login.component';
import { EnseignantvabarComponent } from './Enseignant/enseignantvabar/enseignantvabar.component';
import { SeanceetmatiereComponent } from './Enseignant/seanceetmatiere/seanceetmatiere.component';
import { CreationseanceComponent } from './Enseignant/creationseance/creationseance.component';
import { GestionabsenceComponent } from './Enseignant/gestionabsence/gestionabsence.component';
import { LoginfinalComponent } from './loginfinal/loginfinal.component';
import { EtudiantconsulteComponent } from './Etudiant/etudiantconsulte/etudiantconsulte.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    AdminnavbarComponent,
    PopupetudiantComponent,
    AdminpageComponent,
    LoginComponent,
    EnseignantvabarComponent,
    SeanceetmatiereComponent,
    CreationseanceComponent,
    GestionabsenceComponent,
    LoginfinalComponent,
    EtudiantconsulteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,NgSelectModule,ReactiveFormsModule,NgxPaginationModule,Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
