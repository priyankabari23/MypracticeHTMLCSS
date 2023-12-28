import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
data: any="we are learning string interpolation";
amount:number=900000;
schoolname!:string;
name="priya";
clickEventData:any;
city:any="satara";
constructor(private dataservice : DataService,private router : Router){}
 test(){
  return 50;
}
clickEvent(){
  this.clickEventData=56987;
}

assignval(){
this.dataservice.userName="advik";
this.router.navigateByUrl('lifecyclehooks')
}
}
