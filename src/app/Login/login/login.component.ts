import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private router :Router, private http:HttpClient,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  email: string = "";
  password: string="";
    login() {
      this.email = this.loginForm.value.email;
      this.password= this.loginForm.value.password;
      console.log(this.email);
      console.log(this.password);
     // this.router.navigate(['/admin']);

      let url: string;
      let navigation:string;
      if (this.email.endsWith("@etudiant.enicar.com")) {
        url = 'http://localhost:8081/login/etudiant';
        navigation = '/etudiant';
      } else if (this.email.endsWith("@enseignant.enicar.com")) {
        url ='http://localhost:8081/login/enseignant';
        navigation = '/enseignant'; ///
       // console.log(url);
      }else if(this.email==='admin'&&this.password==='admin'){
        this.router.navigate(['/admin']);
        url='';
      }
     
        else  {
        // handle invalid email
        
        return;
      }
    /*  else if(this.email==='admin'&&this.password==='admin'){
        navigation='/admin';
     }*/
      this.http.post(url, { email: this.email, password: this.password }).subscribe(
        user => {
            console.log(url);
            this.router.navigate([navigation])
            localStorage.setItem('user',JSON.stringify(user));
        },
       
      );
    }
  }


