import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private r:Router) { }

  ngOnInit(): void {
    this.loginform=this.formbuilder.group(
      {
        Email:[''],Password:['']
      }
    )
  }
  login(){
    this.http.get<any>('http://localhost:3000/users').subscribe(res=>{const user=res.find((a:any)=>{
      return a.Email===this.loginform.value.Email &&
      a.Password===this.loginform.value.Password

    })
    if(user){
      alert("User exist");
      this.loginform.reset;
    }
    else{
      alert("no user");
    }
  })

  }

}
