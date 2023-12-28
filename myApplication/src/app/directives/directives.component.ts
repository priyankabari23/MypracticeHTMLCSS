import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  user: string = "Admin";
  city = "pune"
  isShow = true;
  searchText:any;

  cars = ["i10", "i20", "swift", "punch"];
  showDiv = true;
  fruit = "banana";
  tableHeading = ["Name", "Contact", "city", "age"];
  tableData = [
    { name: "pooja", contact: 45698712, city: "Mumbai", age: 20 },
    { name: "priya", contact: 45546521, city: "jalna", age: 24 },
    { name: "jay", contact: 6589713, city: "pune", age: 30 },
    { name: "priyanka", contact: 987054362, city: "kohlapur", age: 29 },
    { name: "advik", contact: 89865132, city: "dhhule", age: 25 },
    { name: "jay", contact: 98756321, city: "jalgaon", age: 35 },
    { name: "ritvik", contact: 978563214, city: "satara", age: 29 },
    { name: "soham", contact: 78965231, city: "pune", age: 28 }]
  constructor(private dataService: DataService) { }
  toggle() {
    //this.showDiv=false;
    this.showDiv = !this.showDiv;
  }
  getdata() {
    this.user = this.dataService.userName;
    console.log("username", this.user);

  }
}
