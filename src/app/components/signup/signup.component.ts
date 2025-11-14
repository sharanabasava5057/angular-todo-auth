import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({selector:'app-signup',templateUrl:'./signup.component.html'})
export class SignupComponent{
 msg='';
 form=this.fb.group({
  fullName:['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.minLength(6)]],
  confirmPassword:['',Validators.required]
 });
 constructor(private fb:FormBuilder,private auth:AuthService,private router:Router){}
 submit(){
  if(this.form.invalid)return this.msg='Invalid details';
  if(this.form.value.password!==this.form.value.confirmPassword)return this.msg='Passwords do not match';
  if(this.auth.signup({fullName:this.form.value.fullName!,email:this.form.value.email!,password:this.form.value.password!}))
   this.router.navigate(['/login']);
  else this.msg='Email already exists';
 }
}