import { Groupe } from "./Groupe";
import{Enseignant}from"./Enseignant";

export class Seance{
   id!:Number;
   date!:Date;
  // date!:String;
   heureDebut!:String;
   heureFin!:String;
   type!:String;
   groupe!:Groupe;
   enseignant!:Enseignant;
}