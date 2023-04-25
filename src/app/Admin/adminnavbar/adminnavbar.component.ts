import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/Model/Enseignant';
import { Etudiant } from 'src/app/Model/Etudiant';
import { Groupe } from 'src/app/Model/Groupe';
import { Matiere } from 'src/app/Model/Matiere';
import { EnseignantService } from 'src/app/Service/enseignant.service';
import { EtudiantService } from 'src/app/Service/etudiant.service';
import { GroupeService } from 'src/app/Service/groupe.service';
import { MatiereService } from 'src/app/Service/matiere.service';


@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent {
  matieres:Matiere[]=[];
  groupes:Groupe[]=[];

  groupe:Groupe=new Groupe();
  matiere:Matiere=new Matiere();
  enseignant :Enseignant=new Enseignant();
  etudiant:Etudiant=new Etudiant();
 

  constructor(private servicematiere:MatiereService,private serviceenseignant:EnseignantService,private serviceetudiant:EtudiantService,private servicegroupe:GroupeService,private router:Router){}


ngOnInit(){
 this.getListMatiere();
 this.getListGroupe();
 //console.log(this.groupes);
}
 
GoToLogin(){
  this.router.navigate(['/login']);
}
GoToAdmin(){
  this.router.navigate(['/admin']);
}

onSubmit(){
 this.createEnseignant();
 this.GoToAdmin();
 
}


onSubmitetud(){
  this.createEtudiant();
  this.GoToAdmin();

}




//get list of matiere
private getListMatiere(){
  return this.servicematiere.getListMatiere().subscribe(data=>{
    this.matieres=data;
    //console.log(this.matieres);
  })
}

//get List groupe
private getListGroupe(){
  return this.servicegroupe.getListGroupe().subscribe(data=>{
    this.groupes=data;
   // console.log(this.groupes);
  },error=>{
    console.log(error)
  })
}



//creer etudiant
private createEtudiant(){
  return this.serviceetudiant.createEtudiant(this.etudiant).subscribe(data=>{
    this.etudiant=data;
    console.log(this.etudiant);
    this.etudiant=new Etudiant();
    this.togglePopupetd();
  })
}


//cree enseignant

private createEnseignant(){
  return this.serviceenseignant.createEnseignant(this.enseignant).subscribe(data=>{
    this.enseignant=data;
    console.log(this.enseignant);
    this.enseignant=new Enseignant();
    this.togglePopup();
  })
}

  showPopup = false;
  showPopupetd = false;
  showPopupGrp=false;
  showPopupMat=false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

 togglePopupetd() {
  this.showPopupetd = !this.showPopupetd;
  }
 
  togglePopupGrp(){
    this.showPopupGrp=!this.showPopupGrp;
  }

  togglePopupMat(){
    this.showPopupMat=!this.showPopupMat;
  }




//creer une matiere
onSubmitMat(){
  return this.servicematiere.createMatiere(this.matiere).subscribe(data=>{
    this.matiere=data;
    console.log(this.matiere);
    this.matiere=new Matiere();
    this.togglePopupMat();
  },error=>{console.log(error)})
}


//creer un groupe
onSubmitGrp(){
  return this.servicegroupe.createGroupe(this.groupe).subscribe(data=>{
    this.groupe=data;
    console.log(this.groupe);
    this.groupe=new Groupe();
    this.togglePopupGrp();
  },error=>{
    console.log(error)
  })
}

}