# Angular  Authentication App  

A simple **Angular  Application** with **Signup/Login Authentication**, **Protected Routes**, **Task Management**, and **LocalStorage** support.  
This project is created as part of **Week 8 Angular Assignment**.

---

## Features

###  Authentication  
- Signup with name, email, password, confirm password  
- Login with validation  
- Error handling for invalid credentials  
- Data stored in **localStorage**

###  Route Guard  
- Prevents access to `/todo` without login  
- Redirects unauthorized users to `/login`

###  Todo Management  
- Add tasks with title, description, due date  
- Mark tasks as completed  
- Delete tasks  
- Filters: **All / Pending / Completed**  
- Search tasks  
- Stored in **localStorage**

###  UI  
- Built using **Bootstrap 5**  
- Responsive and clean interface  
- Navbar with navigation links

---

##  Technologies Used
- Angular 15  
- TypeScript  
- Bootstrap 5  
- HTML & CSS  
- LocalStorage API  

---

## Folder Structure


src/
├── app/
│ ├── components/
│ │ ├── login/
│ │ ├── signup/
│ │ └── todo/
│ ├── guards/
│ │ └── auth.guard.ts
│ ├── services/
│ │ ├── auth.service.ts
│ │ └── todo.service.ts
│ ├── app-routing.module.ts
│ └── app.module.ts
├── assets/
├── index.html
└── styles.css
