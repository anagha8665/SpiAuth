import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform!:FormGroup

  constructor( private formbuilder:FormBuilder,private http:HttpClient,private r:Router) { }

  ngOnInit(): void {
    this.registerform=this.formbuilder.group(
      {
        Username:[''],
        Email:[''],Password:['']
      }
    )
  }
  signup(){
    this.http.post<any>('http://localhost:3000/users',this.registerform.value).subscribe(res=>{alert('done')})
    
  }

}
