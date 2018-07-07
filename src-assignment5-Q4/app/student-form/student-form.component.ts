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

  public show(data)
  {
    console.log(data);
  }
  public uname;
  public pass;
  public showdata()
  {
    console.log(this.uname,this.pass);
  }

 
  }

