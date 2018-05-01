import { Component, OnInit } from '@angular/core';
import { ShareComponent } from '../share/share.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
    
  }

  //设置图像
  imgModal=ShareComponent.name;
  
}
