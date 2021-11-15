import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  estudiante:string="AdminHola!";
  user_correct:string="admininicial";
  pass_correct:string="admin123456";

  user_vacio:string="";
  pass_vacio:string="";


  user:string="";
  pass:string="";

  correcto:number=-1;
  comparar(){
    if (this.user===this.user_correct){
      this.correcto = 1;
      if (this.pass===this.pass_correct) {
        this.correcto=1;

      }else{
        this.correcto=0;
      }
    }else{
      this.correcto=0;
    }
    if(this.user===this.user_vacio || this.pass===this.pass_vacio){
      this.correcto=2
      if(this.pass===this.pass_vacio)
      this.correcto=2
    }
  }
  redirigir(){
    if(this.user===this.user_correct && this.pass===this.pass_correct){
      this.router.navigate(['/productos'])
    }
  }
  navegarHaciaDash(){
    this.router.navigate(['/dasboard'])
   }
}
