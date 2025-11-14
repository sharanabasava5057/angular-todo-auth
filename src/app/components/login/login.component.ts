import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({selector:'app-login',templateUrl:'./login.component.html'})
export class LoginComponent{
 msg=''; 
 form=this.fb.group({email:['',[Validators.required,Validators.email]],password:['',Validators.required]});
 constructor(private fb:FormBuilder,private auth:AuthService,private router:Router){}
 submit(){ if(this.form.invalid)return this.msg='Invalid';
 if(this.auth.login(this.form.value.email!,this.form.value.password!)) this.router.navigate(['/todo']);
 else this.msg='Wrong email or password'; }
}