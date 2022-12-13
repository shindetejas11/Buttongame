import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radiobutn',
  templateUrl: './radiobutn.component.html',
  styleUrls: ['./radiobutn.component.scss']
})
export class RadiobutnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  bgcolor='skyblue'
  submittbutton(value:any){
    this.bgcolor =value.value.btncolor
  }

}
