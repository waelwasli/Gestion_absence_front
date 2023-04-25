import { Component,OnInit } from '@angular/core';
import { Enseignant } from 'src/app/Model/Enseignant';
import { Etudiant } from 'src/app/Model/Etudiant';
import { Groupe } from 'src/app/Model/Groupe';
import { Matiere } from 'src/app/Model/Matiere';
import { EnseignantService } from 'src/app/Service/enseignant.service';
import { EtudiantService } from 'src/app/Service/etudiant.service';
import { GroupeService } from 'src/app/Service/groupe.service';
import { MatiereService } from 'src/app/Service/matiere.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  selectedvalue!:string;
  id!:Number;
  idetd!:Number;
  
  
  showEtudiant=false;
  showEnseignant=false;

  email!:string;
  enseignant:Enseignant=new Enseignant();
  etudiant:Etudiant=new Etudiant();
  groupe:Groupe=new Groupe();

  Listenseignants:Enseignant[]=[];
  Listetudiants:Etudiant[]=[];

  listGroupe:Groupe[]=[];
  listMatiere:Matiere[]=[];
  

  constructor(private enseignantservice:EnseignantService,private etudiantservice:EtudiantService,private servicematiere:MatiereService,private servicegroupe:GroupeService){}

  ngOnInit(){
  
  
  this.getListEnseignants();
  this.getListEtudiant();
  this.getListMatiere();
  this.getListGroupe();
  }

//search of etudiant

SearchEtd(){
  if(this.email==""){
    this.ngOnInit();
  }else{
    this.Listetudiants=this.Listetudiants.filter(res=>{
      return res.email.match(this.email);
    })
  }
}

SearchEns(){
  if(this.email==""){
    this.ngOnInit();
  }else{
    this.Listenseignants=this.Listenseignants.filter(res=>{
      return res.email.match(this.email);
    })
  }
}




//get list of matiere
private getListMatiere(){
  return this.servicematiere.getListMatiere().subscribe(data=>{
    this.listMatiere=data;
    //console.log(this.matieres);
  })
}

//get List groupe
private getListGroupe(){
  return this.servicegroupe.getListGroupe().subscribe(data=>{
    this.listGroupe=data;
    //console.log(this.groupes);
  },error=>{
    console.log(error)
  })
}

  //get listof enseignant
  private getListEnseignants(){
    return this.enseignantservice.getListEnseignant().subscribe(data=>{
      this.Listenseignants=data;
      //console.log(this.Listenseignants);
    },error=>{console.log(error)})
  }

  //delete enseignant
  deleteEnseignant(id:Number){
    this.enseignantservice.deleteEnseignant(id).subscribe(data=>{
    // console.log(data);
      this.getListEnseignants();
    })
  }


//edit enseignant
 editEnseignant(id:Number){
  this.togglePopup();
  this.enseignantservice.getEnseignantById(id).subscribe(data=>{
    this.enseignant=data;
   
   // this.id=this.enseignant.id;
   // console.log(this.enseignant);
   // console.log(id);
  },error=>{console.log(error)})
}
//update enseignant
onUpdate(){

  this.id=this.enseignant.id;

  this.enseignantservice.updateEnseignant(this.id,this.enseignant).subscribe(data=>{
    this.enseignant=data;
    //console.log(this.enseignant);
    this.getListEnseignants();
    this.togglePopup();
  },error=>{console.log(error)})
}
//-------------------------------------------------------Etudiant-----------------------------------------

//get listof etudiant

 private getListEtudiant(){
  return this.etudiantservice.getListofEtudiant().subscribe(data=>{
    this.Listetudiants=data;
   // console.log(this.Listenseignants);
  },error=>{console.log(error)})
}

//delete etudiant
deleteEtudiant(id:Number){
 this.etudiantservice.deleteEtudiant(id).subscribe(data=>{
  // console.log(data);
    this.getListEtudiant();
  })
}

//edit enseignant
editEtudiant(id:Number){
 this.togglePopupetd();
  this.etudiantservice.getEtudiantById(id).subscribe(data=>{
   this.etudiant=data;
   // this.id=this.enseignant.id;
   // console.log(this.enseignant);
   // console.log(id);
  },error=>{console.log(error)})
}

//update enseignant
onUpdateEtudiant(){
  this.idetd=this.etudiant.id; 
  this.etudiantservice.updateEtudiant(this.idetd,this.etudiant).subscribe(data=>{
    this.etudiant=data;
    //console.log(this.enseignant);
    this.getListEtudiant();
   this.togglePopupetd();
  },error=>{console.log(error)})
}

/* ------------------------------------------ groupe -----------------------------*/
//delete groupe
deleteGroupe(id:Number){
  return this.servicegroupe.deleteGroupe(id).subscribe(data=>{
    this.getListGroupe();
  },error=>{console.log(error)})
}

/* ------------------------------------------ matiere-----------------------------*/

//delete matiere

deleteMatiere(id:Number){
  return this.servicematiere.deleteMatiere(id).subscribe(data=>{
    this.getListMatiere();
  },error=>{console.log(error)})
}



  displayValue(){
    console.log(this.selectedvalue);
    
    
  }
  /*
  displaypop(){
    console.log('show popup');
  }*/

  showPopup = false;
  togglePopup() {
    this.showPopup = !this.showPopup;
  }


  showPopupetd = false;
  togglePopupetd() {
    this.showPopupetd = !this.showPopupetd;
    }
  showPopupAffMat=false;
  togglePopupAffMat(){
    this.showPopupAffMat=!this.showPopupAffMat;
  }

  showPopupAffGrp=false;
  togglePopupAffGrp(){
    this.showPopupAffGrp=!this.showPopupAffGrp;
  }


  //------------------------Affecter des matieres a un groupe------------------------------

  matiereSelectionnee:Matiere[]=[];


  onAttribueMat(){
   
    const grpID=this.groupe.id;
    const matiereIDs=this.matiereSelectionnee.map(matier=>matier.id);
    this.servicegroupe.addMatieresToGroupe(grpID,matiereIDs).subscribe(()=>{
      console.log("success")});
      this.togglePopupAffMat();
    
  }
/*
  ajouterMatiere(matiere: Matiere) {
    this.matiereSelectionnee.push(matiere);
  }
 */
  AffectMatieresToGrp(id:Number){
    this.togglePopupAffMat();
    this.servicegroupe.getGroupeById(id).subscribe(data=>{
      this.groupe=data;
     // console.log(this.groupe.id);
    })
  }


  //-----------------------------------affecter des groupes a un enseignant---------------------------

  listGroupeofEns:Groupe[]=[];

  groupeSelectionnee:Groupe[]=[];

  onAttribueGrps(){
    const EnsID=this.enseignant.id;
   // console.log(EnsID);
    const GroupeIds=this.groupeSelectionnee.map(groupe=>groupe.id);
    this.enseignantservice.addGroupesToEnseignant(EnsID,GroupeIds).subscribe(data=>{
      console.log("succes well done");
    },error=>{console.log(error)})
    this.togglePopupAffGrp();
  }

 AffectGroupesToEns(id:Number){

 this.enseignantservice.getListGroupeByEnseignant(id).subscribe(data=>{
  this.listGroupeofEns=data;
 // console.log(this.listGroupeofEns);
 })
   this.togglePopupAffGrp();
  this.enseignantservice.getEnseignantById(id).subscribe(data=>{
      this.enseignant=data;
    
    })
  }
}
