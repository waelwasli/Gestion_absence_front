import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enseignantvabar',
  templateUrl: './enseignantvabar.component.html',
  styleUrls: ['./enseignantvabar.component.css']
})
export class EnseignantvabarComponent {
  dropdownVisible: boolean = false;
  currentUser:any;


 constructor(private router:Router){}

 ngOnInit(){
 
  this.getEnseignant();

}
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
}





getEnseignant(){
  const user=localStorage.getItem('user');
  if(user){
    this.currentUser=JSON.parse(user);
    
    console.log(this.currentUser);
  }
}

GoToLogin(){
  this.router.navigate(['/login']);
}

}
