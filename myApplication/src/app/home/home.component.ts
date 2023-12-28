import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  city:string='pune';   //property
  surname : any =true;
  name : string="poonam";
  name2!:string;
   constructor(private router:Router, private dataService:DataService){}
   ngOnInit(){
      this.dataService.userName=this.name;
   }

  signUpCompo(){
    this.name2="advik";
    console.log("city>>",this.city);
    
    console.log("signup compo fun calling...");
    this.test();
    this.router.navigateByUrl("signUp")
    
  }
  test(){
    console.log('test calling...');
    
  }
  directives(){
    this.router.navigateByUrl("directives")
  }
}
