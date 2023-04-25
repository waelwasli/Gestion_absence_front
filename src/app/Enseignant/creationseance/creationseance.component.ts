import { Component,OnInit } from '@angular/core';
import { Enseignant } from 'src/app/Model/Enseignant';
import { Groupe } from 'src/app/Model/Groupe';
import { Seance } from 'src/app/Model/Seance';
import { CreationseanceService } from 'src/app/Service/creationseance.service';
import { SeanceetmatiereService } from 'src/app/Service/seanceetmatiere.service';

@Component({
  selector: 'app-creationseance',
  templateUrl: './creationseance.component.html',
  styleUrls: ['./creationseance.component.css']
})
export class CreationseanceComponent {

  enseignant:Enseignant=new Enseignant();
  groupeEns:Groupe[]=[];
  //idGrp!:Number;
  seance:Seance=new Seance();
  currentUser:any;
  
  constructor(private seanceetmatiereservice:SeanceetmatiereService,private creationseanceservice:CreationseanceService){}

  ngOnInit(){
  /* this.seanceetmatiereservice.getEnseignantByEmail().subscribe(data=>{
           this.enseignant=data;
           this.groupeEns=this.enseignant.groupes;
           console.log(this.groupeEns);
    },error=>{console.log(error)})
   */
  this.getEnseignant();
  }

  createSeance(){

    this.creationseanceservice.addEnsToSeance(this.seance,this.currentUser.id).subscribe(data=>{
      this.seance=data;
      console.log(this.seance);
    },error=>{console.log(error)})
  }

  getEnseignant(){
    const user=localStorage.getItem('user');
    if(user){
      this.currentUser=JSON.parse(user);
      
     // console.log(this.currentUser);
    }
  }

 
}
