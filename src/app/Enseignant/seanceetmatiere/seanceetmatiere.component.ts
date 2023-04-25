import { Component,OnInit } from '@angular/core';
import { Enseignant } from 'src/app/Model/Enseignant';
import { Seance } from 'src/app/Model/Seance';
import { CreationseanceService } from 'src/app/Service/creationseance.service';
import { SeanceetmatiereService } from 'src/app/Service/seanceetmatiere.service';

@Component({
  selector: 'app-seanceetmatiere',
  templateUrl: './seanceetmatiere.component.html',
  styleUrls: ['./seanceetmatiere.component.css']
})
export class SeanceetmatiereComponent {
  enseignant:Enseignant=new Enseignant();
  nomMatEn:string='';
  listSeances:Seance[]=[];
  listSeanceOfEns:Seance[]=[];
  currentUser:any;
  nomMatuser!:string;
  constructor(private seanceetmatiereservice:SeanceetmatiereService,private creationseanceservice:CreationseanceService){}

  ngOnInit(){
   /*
    this.seanceetmatiereservice.getEnseignantByEmail().subscribe(data=>{
      this.enseignant=data;
      this.nomMatEn=this.enseignant.matiere.nomMat;
     // console.log(this.enseignant);*/
     this.getListSeance();
     this.getEnseignant();
     this.getlisSeanceOfEns();
     

   
  }

  getListSeance(){
      return this.creationseanceservice.getListSeance().subscribe(data=>{
        this.listSeances=data;
      },error=>{console.log(error)})
  }
  
  getEnseignant(){
    const user=localStorage.getItem('user');
    if(user){
      this.currentUser=JSON.parse(user);
      
     // console.log(this.currentUser);
     
    }
  }

  getlisSeanceOfEns(){
        this.seanceetmatiereservice.findSeanceByEnseignant(this.currentUser.id).subscribe(data=>{
          this.listSeanceOfEns=data;
          console.log(this.listSeanceOfEns);
        })
  }
}
