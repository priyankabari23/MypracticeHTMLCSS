import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent {
  name:any;
  @Input() surName:any;
  constructor(private dataService : DataService){
    console.log("constructor calling....");
    
  }
  ngOnChanges(){
    console.log("onchange calling");
    
  }
  ngOnInit(){
    this.name=this.dataService.userName;
    console.log("on init calling");
    
  }
  ngDoCheck(){
    console.log("do check calling");
  }
ngAfterContentInit(){
  console.log("ngAftercontent init");
  
  
}
ngAfterContentChecked(){
  console.log("ngAftercontentcheck init");
  
}
ngAfterViewInit(){
  console.log("ngAfterViewInit");
  
}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked");
  
}
ngOnDestroy(){
  console.log("ngOnDestroy");
  
}
}
