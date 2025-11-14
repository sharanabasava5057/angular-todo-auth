import { Injectable } from '@angular/core';
export interface Task{id:number;title:string;description?:string;done:boolean;dueDate?:string;}
@Injectable({providedIn:'root'})
export class TodoService{
 private key='tasks';
 list():Task[]{return JSON.parse(localStorage.getItem(this.key)||'[]');}
 add(t:any){
  const x=this.list();
  x.push({id:Date.now(),done:false,...t});
  localStorage.setItem(this.key,JSON.stringify(x));
 }
 toggle(id:number){
  const x=this.list().map(t=>t.id===id?{...t,done:!t.done}:t);
  localStorage.setItem(this.key,JSON.stringify(x));
 }
 remove(id:number){
  const x=this.list().filter(t=>t.id!==id);
  localStorage.setItem(this.key,JSON.stringify(x));
 }
}