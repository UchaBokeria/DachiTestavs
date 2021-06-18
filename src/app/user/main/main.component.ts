import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  yle = 0;

  tasks = [
    {time:8, name:"Yoga"},
    {time:9, name:"Swim"},
    {time:10, name:"Running"},
    {time:11, name:"Push ups"},
    {time:12, name:"Time out"},
    {time:13, name:"Running"},
    {time:14, name:"Physical"},
    {time:15, name:"Chill"},
    {time:12, name:"Time out"},
    {time:13, name:"Running"},
    {time:14, name:"Physical"},
    {time:15, name:"Chill"}
  ];

  schdeule = [
    {time:"07:00"},
    {time:"08:00"},
    {time:"09:00"},
    {time:"10:00"},
    {time:"11:00"},
    {time:"12:00"},
    {time:"13:00"},
    {time:"14:00"},
    {time:"15:00"},
    {time:"16:00"},
    {time:"17:00"},
    {time:"18:00"},
    {time:"19:00"},
    {time:"20:00"},
    {time:"21:00"},
    {time:"22:00"},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  header_class = "header";

  @HostListener("document:scroll")
  scrollFunc(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ){
      this.header_class = "testHeader";
    }
    else{
      this.header_class = "header";
    }

  }

}
