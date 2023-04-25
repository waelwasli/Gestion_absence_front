import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Matiere } from 'src/app/Model/Matiere';
import { AbsenceService } from 'src/app/Service/absence.service';
import { MatiereService } from 'src/app/Service/matiere.service';

@Component({
  selector: 'app-etudiantconsulte',
  templateUrl: './etudiantconsulte.component.html',
  styleUrls: ['./etudiantconsulte.component.css']
})
export class EtudiantconsulteComponent {

  currentUser:any;
  
  listMatiereofEtd:Matiere[]=[];
  constructor(private matiereservice:MatiereService,private router:Router,private absenceservice:AbsenceService){}
  ngOnInit(){
    this.getEtudiant();
 
  this.getListMatAbs();
 
  }

  displayidmat(){
   // console.log(this.matAbs);
    this.getNombreAbsofEtd();
 // console.log(this.nombreAbs);
  }


  getEtudiant(){
    const user=localStorage.getItem('user');
    if(user){
      this.currentUser=JSON.parse(user);
      
      console.log(this.currentUser);
    }
  }

 

  getListMatAbs(){
    this.matiereservice.getMatEtd(this.currentUser.id).subscribe(data=>{
      this.listMatiereofEtd=data;
      console.log(this.listMatiereofEtd);
    })
  }


  GoToLogin(){
    this.router.navigate(['/login']);
  }
nombreAbs!:Number;
matAbs:Matiere=new Matiere();
idMat!:Number;
abs!:Number;
  getNombreAbsofEtd(){
   // console.log(this.matAbs.id);
   //console.log(this.idMat);
  // console.log(this.currentUser.id);
  
    return this.absenceservice.getNombreAbsence(this.currentUser.id,this.matAbs.id).subscribe(data=>{
        this.nombreAbs=data;
        console.log(this.nombreAbs);
    })
  }
  
}
