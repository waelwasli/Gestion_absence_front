import { Groupe } from "./Groupe";
import { Matiere } from "./Matiere";
import { Seance } from "./Seance";

export class Enseignant{
    id!:Number;
    firstName!:String;
    lastName!:String;
    email!:String;
    password!:String;
     imageUrl!:String;
     groupes!:Groupe[];
    matiere!:Matiere;
    seances!:Seance[];
}