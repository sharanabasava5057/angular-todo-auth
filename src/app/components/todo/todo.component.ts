import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({selector:'app-todo',templateUrl:'./todo.component.html'})
export class TodoComponent{
 filter:'all'|'pending'|'completed'='all';
 q='';
 form=this.fb.group({title:['',Validators.required],description:[''],dueDate:['']});
 constructor(private fb:FormBuilder,public todo:TodoService,private auth:AuthService,private router:Router){}
 get tasks(){
  let t=this.todo.list();
  if(this.filter==='pending')t=t.filter(x=>!x.done);
  if(this.filter==='completed')t=t.filter(x=>x.done);
  if(this.q)t=t.filter(x=>x.title.toLowerCase().includes(this.q.toLowerCase()));
  return t;
 }
 add(){ if(this.form.invalid)return;
 this.todo.add({title:this.form.value.title!,description:this.form.value.description!,dueDate:this.form.value.dueDate!});
 this.form.reset();
 }
 toggle(id:number){this.todo.toggle(id);}
 remove(id:number){this.todo.remove(id);}
 logout(){this.auth.logout();this.router.navigate(['/login']);}
}