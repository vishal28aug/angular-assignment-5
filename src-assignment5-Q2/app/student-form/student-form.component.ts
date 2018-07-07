import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

public sname;
public add;
public mob;
public cname;
public email;
public bname;

  public showdata()
  {
    console.log("First Name :" + this.sname);
    console.log("Middle Name :" +this.add);
    console.log("Last Name :" +this.mob);
    console.log("Address :" +this.cname);  
    console.log("Mobile No:" +this.email);
    console.log("College Name :" +this.bname);
    
  }
}
