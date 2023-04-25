import { Groupe } from "./Groupe";
export class Etudiant{
    id!:Number;  
    firstName!:string;
    lastName!:string;
    email!:string;
    password!:string;
    imageUrl!:string;
    groupe!:Groupe;
    status!:string;
}