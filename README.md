## Interpolation or one way Data Binding:

name: String= 'Brighty'; in component

{{name}} in html

## 2 Way Data Binding:

[(ngModule)] this is the banana approach 
```
Username: <input type='text' name='username' [(ngModel)]="username">
```
We should import FormsModule in app.module.ts

## Event Data Binding:

Trigger the event click and print the data.
```
<button (click)="handleLogin()">Login</button> in html.
```
  In Component,
  ```
  handleLogin(){
    console.log(this.username);
  }
```
  ## Routing Components:

  In [app-routing.module.ts],

  We can see const routes: Routes = [];
```
  const routes: Routes = [{path:'login', component:LoginComponent},
                          {path:'welcome', component: WelcomeComponent}];
```
And check app.component.html have <router-outlet></router-outlet>

for default/ initial page,path should be empty.
```
 const routes: Routes = [{path:'', component:LoginComponent}]
```
for other path which is not mentioned in routes.
```
 const routes: Routes = [{path:'**', component:ErrorComponent}] 
```
## Router from one component to another component:

Add the parameter in Constructor as router:Router and as well import in Login Component, (Dependency Injection)

In button click event we can add 
```
this.router.navigate(['welcome']);
```

navigate is the one of the method of Router and the first parameter we set 'welcome' (to which page be navigate)

* Router with parameter:


