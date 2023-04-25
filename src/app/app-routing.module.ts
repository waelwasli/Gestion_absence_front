import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { AdminnavbarComponent } from './Admin/adminnavbar/adminnavbar.component';
import { AdminpageComponent } from './Admin/adminpage/adminpage.component';
import { SeanceetmatiereComponent } from './Enseignant/seanceetmatiere/seanceetmatiere.component';
import { CreationseanceComponent } from './Enseignant/creationseance/creationseance.component';
import { GestionabsenceComponent } from './Enseignant/gestionabsence/gestionabsence.component';
import { EtudiantconsulteComponent } from './Etudiant/etudiantconsulte/etudiantconsulte.component';

const routes: Routes = [{
  path:'login',component:LoginComponent
  
},{
  path:'admin',component:AdminnavbarComponent
},{path:'enseignant',component:SeanceetmatiereComponent},{path:'creationseance',component:CreationseanceComponent}
,{path:'gestionabsence',component:GestionabsenceComponent},{path:'etudiant',component:EtudiantconsulteComponent},
{path:'',redirectTo:'login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
