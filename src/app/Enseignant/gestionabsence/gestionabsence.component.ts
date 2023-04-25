import { Component,OnInit } from '@angular/core';
import { Absence } from 'src/app/Model/Absence';
import { Enseignant } from 'src/app/Model/Enseignant';
import { Etudiant } from 'src/app/Model/Etudiant';
import { Seance } from 'src/app/Model/Seance';
import { AbsenceService } from 'src/app/Service/absence.service';
import { CreationseanceService } from 'src/app/Service/creationseance.service';
import { EtudiantService } from 'src/app/Service/etudiant.service';
import { SeanceetmatiereService } from 'src/app/Service/seanceetmatiere.service';

@Component({
  selector: 'app-gestionabsence',
  templateUrl: './gestionabsence.component.html',
  styleUrls: ['./gestionabsence.component.css']
})
export class GestionabsenceComponent {
  showTable:boolean=true;
listSeances:Seance[]=[];  
Listetudiants:Etudiant[]=[];
seanceFiltered:Seance=new Seance();
dateSeance!:Date;
heureDebutS!:string;
heureFinS!:string;
nomGrpFiltred!:String;
idMatOfEns!:Number;
etudiants:Etudiant[]=[];
enseignant:Enseignant=new Enseignant();
currentUser:any;
etd:Etudiant=new Etudiant();
//statusval:string='Present';
    
    // Ajoutez d'autres séances ici
  
  constructor(private creationseanceservice:CreationseanceService,private etudiantservice:EtudiantService,
    private absenceservice:AbsenceService,private seanceetmatiereservice:SeanceetmatiereService){}

    ngOnInit(){
      this.getListSeance();
      this.getListEtudiant();
    this.getEnseignant();
   this.etd.status='present';
    }


    showTab(){
         this.showTable=false;
      for(let s of this.listSeances ){
        if(s.date===this.dateSeance&&s.heureDebut===this.heureDebutS&&s.heureFin===this.heureFinS){
          this.seanceFiltered=s;
          this.nomGrpFiltred=this.seanceFiltered.groupe.nomGrp;
          this.absence.dateAbs=this.seanceFiltered.date;
          this.absence.heureDebut=this.seanceFiltered.heureDebut;
          this.absence.heureFin=this.seanceFiltered.heureFin;
          console.log(this.seanceFiltered);
          console.log(this.nomGrpFiltred);
          console.log(this.absence);
        }
      }
      this.etudiantservice.getListofEtudiant().subscribe(data=>{
        this.Listetudiants=data});
       // console.log(this.Listetudiants);
       for(let etd of this.Listetudiants){
        if(etd.groupe.nomGrp===this.nomGrpFiltred){
         this.etudiants.push(etd);
          console.log(this.etudiants);
        }
       }

    }

 
  getEnseignant(){
    const user=localStorage.getItem('user');
    if(user){
      this.currentUser=JSON.parse(user);
      
     // console.log(this.currentUser);
    }
  }

    getListSeance(){
      return this.creationseanceservice.getListSeance().subscribe(data=>{
        this.listSeances=data;
        console.log(this.listSeances);
      },error=>{console.log(error)})
  }
 

 
  private getListEtudiant(){
    return this.etudiantservice.getListofEtudiant().subscribe(data=>{
      this.Listetudiants=data;
      console.log(this.Listetudiants);
    },error=>{console.log(error)})
  }
  
  showPopupAbs=false;
  togglePopupAbs(){
    this.showPopupAbs=! this.showPopupAbs;
  }
  affecter(){
    this.showPopupAbs=! this.showPopupAbs;
  }

  absence:Absence=new Absence();
  
  createAbsenceTo(idEtd:Number){
    alert('absence attribue avec succes');
       return this.absenceservice.createAbsenceToEtdAndMat(this.absence,idEtd,this.currentUser.matiere.id).subscribe(data=>{
           console.log(data);
           
       })
       
      
  }
}
