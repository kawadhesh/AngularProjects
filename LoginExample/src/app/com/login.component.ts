import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(public router: Router, 
    public formBuilder: FormBuilder) 
    {
    this.loginForm= this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    })
    }
  ngOnInit(): void {
  }
  loginUser(){
    console.log(this.loginForm.get('name').value);
    //console.log(form.value);
    if(this.loginForm.get('name').value==='ram'){
      alert('login successfulle');  
    } else {
      alert('login failure');  
    }
    
  }
}
