import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StoreTeamTwo';

  estudiante:string="AdminHola!";
  user_correct:string="admininicial";
  pass_correct:string="admin123456";

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

  }
}
