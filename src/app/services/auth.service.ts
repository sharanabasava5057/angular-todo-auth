import { Injectable } from '@angular/core';
export interface User{fullName:string;email:string;password:string;}
@Injectable({providedIn:'root'})
export class AuthService{
 private current='currentUser';
 private users='users';
 signup(u:User){
  const list=this.all();
  if(list.find(x=>x.email===u.email))return false;
  list.push(u); localStorage.setItem(this.users,JSON.stringify(list));
  return true;
 }
 login(e:string,p:string){
  const u=this.all().find(x=>x.email===e&&x.password===p);
  if(!u)return false;
  localStorage.setItem(this.current,JSON.stringify({email:e}));
  return true;
 }
 logout(){localStorage.removeItem(this.current);}
 isLoggedIn(){return !!localStorage.getItem(this.current);}
 private all():User[]{return JSON.parse(localStorage.getItem(this.users)||'[]');}
}