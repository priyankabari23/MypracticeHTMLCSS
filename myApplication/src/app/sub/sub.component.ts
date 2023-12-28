import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {


data="priyanka";
  constructor(private dataService :DataService){}
  ngOnInit(){
  this.setData
  }
  setData(){
    this.dataService.data.next(this.data)
  }
}
