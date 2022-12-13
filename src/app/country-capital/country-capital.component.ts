import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-country-capital',
  templateUrl: './country-capital.component.html',
  styleUrls: ['./country-capital.component.scss']
})
export class CountryCapitalComponent implements OnInit, AfterViewInit {

  database =[
    {
        "country": "Afghanistan",
        "city": "Kabul"
    },
    {
        "country": "India",
        "city": "Delhi"
    },
    {
      "country": "Pakistan",
      "city": "Karachi"
    },
    {
        "country": "Bangladesh",
        "city": "Dhaka"
    }
  ]
  countries:any[]=[];
  capitals:any[]=[];
  gameData:any[]=[];
  previousButton:any;
  isGameFinished: boolean=false;
  allBtns: any;

  populateCountries(){
    this.database.forEach((ele:any)=>{
      this.countries.push(ele.country)
    })
  }

  populateCapitals(){
    this.database.forEach((ele:any)=>{
      this.capitals.push(ele.city)
    })
  }

  shuffleData(data:any[]) {
    for (var i = data.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = data[i];
        data[i] = data[j];
        data[j] = temp;
    }
        
    return data;
 }

  constructor(private btns: ElementRef, private renderer_: Renderer2) {
    this.populateCountries()
    this.populateCapitals()

   this.gameData= this.shuffleData(this.countries.concat(this.capitals))
   }
  ngAfterViewInit(): void {
    this.allBtns= this.btns.nativeElement.querySelectorAll('.btn');
  }

  ngOnInit(): void {
  }

  @HostListener("click", ['$event.target']) onClicked(e:HTMLButtonElement){
    console.log(e)
    if(e.nodeName == "BUTTON" || e.closest('button')){
      if(this.previousButton){
        if(this.countries.indexOf(e.value) == this.capitals.indexOf(this.previousButton.value)){
            this.renderer_.addClass(e,"d-none");
            this.renderer_.addClass(this.previousButton,"d-none");
          this.previousButton=null;
          console.log(this.btns)
          if(!this.allBtns){
            this.isGameFinished=true
          }
        }else{
          this.renderer_.addClass(e,"btn-danger")
          this.renderer_.addClass(this.previousButton,"btn-danger")
          this.previousButton=null;
        }
      }else {
        [...this.allBtns].forEach((btn:any)=>{
          this.renderer_.removeClass(btn, "btn-primary")
          this.renderer_.removeClass(btn, "btn-danger")
        })
        this.renderer_.addClass(e,"btn-primary")
        this.previousButton=e
      }
    }
  }
}
