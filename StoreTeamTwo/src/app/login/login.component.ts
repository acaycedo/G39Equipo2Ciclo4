import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  estudiante:string="AdminHola!";
  user_correct:string="admininicial";
  pass_correct:string="admin123456";

  user:string="";
  pass:string="";

  correcto:number=-1;
  comparar(){

    if (this.user==""||this.pass==""){
      this.correcto = 2;
    }else if(this.user===this.user_correct){
      this.correcto = 1;
      if (this.pass===this.pass_correct) {
        this.correcto=1;
        
      }else{
        this.correcto=0;
      }
    }else{
      this.correcto=0;
    }

  }



}
