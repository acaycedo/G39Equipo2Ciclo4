import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

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
    if(this.user===this.user_vacio){
      this.correcto=2
      if(this.pass===this.pass_vacio)
      this.correcto=2
    }
  }
}
