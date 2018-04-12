import { Component, OnInit,Input,ComponentFactoryResolver,ViewContainerRef,ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
//import { NbEmpParFonctionComponent } from '../../rh/employe-diversite/shared/nb-emp-par-fonction/nb-emp-par-fonction.component';
//import { NbEmpParGenreComponent } from '../../rh/employe-diversite/shared/nb-emp-par-genre/nb-emp-par-genre.component';


//let modalService: NgbModal;
//let closeResult: String;
@Component({
  selector: 'app-line-chart2',
  templateUrl: './line-chart2.component.html',
  styleUrls: ['./line-chart2.component.scss'],
  entryComponents:[]//NbEmpParGenreComponent
})
export class LineChart2Component implements OnInit {

  @ViewChild('content') private content;
  @Input() d;
  @Input() XAxis;
  @Input() YAxis;
  @Input() key;
  @Input() color;
   year;
  var1=false;
  options;
  data;
  chartType;
  a=1;
  closeResult: string;
 //content="content";

constructor(public modalService: NgbModal, private m1:ViewContainerRef,private m2:ComponentFactoryResolver){}
public open(year){
  this.year=year;
  console.log("Debut open");
 this.modalService.open(this.content).result.then((result) => {
  this.closeResult = `Closed with: ${result}`;
}, (reason) => {
  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
});
console.log("fin open");
}
  ngOnInit(){
    this.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function(d){ return d.label; },
        y: function(d){ return d.count; },
       // useInteractiveGuideline: true,
        xAxis: {
          axisLabel: "Fonctions",
        },
        yAxis: {
          axisLabel: "Nb Embauche",
          tickFormat: function(d){
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -10
        },
        lines:{
          dispatch:{
            elementClick:(e)=>{console.log("click");
            console.log("year"+e.point.label);
            this.open(e.point.label);
            console.log("apre open");
          }
          }
        },
       callback: function(e){
         console.log("callback");
         
        // this.open();
       }
      }
    };
  
    this.data =[
      {
        values: this.d,    //values - represents the array of {x,y} data points
        key: this.key, //key  - the name of the series.
        color: '#ff7f0e'  //color - optional: choose your own line color.
      },
    ]//this.sinAndCos();/*
    

}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
  } else {
      return  `with: ${reason}`;
  }
}
sinAndCos() {
  var sin = [],sin2 = [],
    cos = [];

  //Data is represented as an array of {x,y} pairs.
  for (var i = 0; i < 100; i++) {
    sin.push({x: i, y: Math.sin(i/10)});
    sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
    cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
  }

  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: sin,      //values - represents the array of {x,y} data points
      key: 'Sine Wave', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },
    {
      values: cos,
      key: 'Cosine Wave',
      color: '#2ca02c'
    },
    {
      values: sin2,
      key: 'Another sine wave',
      color: '#7777ff',
      area: true      //area - set to true if you want this line to turn into a filled area chart.
    }
  ];
}
}
