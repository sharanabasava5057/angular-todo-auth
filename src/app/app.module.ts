import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TodoComponent } from './components/todo/todo.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { TodoService } from './services/todo.service';

@NgModule({
 declarations:[AppComponent,LoginComponent,SignupComponent,TodoComponent],
 imports:[BrowserModule,AppRoutingModule,ReactiveFormsModule,FormsModule],
 providers:[AuthService,TodoService,AuthGuard],
 bootstrap:[AppComponent]
})
export class AppModule {}