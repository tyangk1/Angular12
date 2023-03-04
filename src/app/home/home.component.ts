import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name= 'Trường Giang';
  public age = 15;
  public traiCay = ['Táo','Nho','Cam','Quýt','Đào'];

  constructor() { }

  ngOnInit(): void {
    console.log('Trai cay = ', this.traiCay)
  }

  public resetName():void {
    console.log('resetName');
    this.name ='';
  }
}
