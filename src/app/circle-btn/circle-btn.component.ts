import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-circle-btn',
  templateUrl: './circle-btn.component.html',
  styleUrls: ['./circle-btn.component.scss']
})
export class CircleBtnComponent implements OnInit {

  count: number = 0;
  circleContainer: any;
  @ViewChild ('value') message!:ElementRef
  
  constructor(private btn: ElementRef, private renderer_: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.circleContainer = this.btn.nativeElement.querySelectorAll('.circle-container');
  }
     @HostListener('click', ['$event.target']) onClicked(e: HTMLButtonElement) {
    if (e.nodeName == "BUTTON" && e.closest('.btn')) {
      const newCircleButton = this.renderer_.createElement('button');
      this.renderer_.addClass(newCircleButton, 'circle')
      this.renderer_.addClass(newCircleButton, `circle-${this.count}`)
      console.log(this.circleContainer)
      this.renderer_.appendChild(this.circleContainer[0], newCircleButton)
    }

    if (e.nodeName == "BUTTON" && e.closest('.circle')) {
      if (e.classList.contains('selected')) {
        this.renderer_.removeClass(e, 'selected')
        this.count--;
      } else {
        this.renderer_.addClass(e, 'selected')
        this.count++;
      }
    }
  }
  onclik(){
    this.message.nativeElement.style.color='red'
  }
}
