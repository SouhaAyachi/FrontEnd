import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { NgStyle } from '@angular/common';
import { NvD3Component } from 'ng2-nvd3';


declare let nvD3: any;
//declare let nv:any;

@Component({
  selector: 'app-discret-bar-chart',
  templateUrl: './discret-bar-chart.component.html',
  styleUrls: ['./discret-bar-chart.component.scss']
/* styles: [
    'div.outer { overflow: scroll; }',
    'div.outer .inner { width: {width} px }'
 ]*/
})
export class DiscretBarChartComponent implements OnInit {
  @Input() d;
  @Input() key: string;
  @Input() XAxis: string;
  @Input() YAxis: string;
  @Input() height;
  @Input() sizeBar;
  @Input() showXAxis=true;
  //nv:NvD3Component;
  width;
  style;
  w="100vw"
  //api;
  /*public refresh(){
    this.api.updateWithData(this.data);
  }*/
  static staticVar=-1;
constructor() {
  DiscretBarChartComponent.staticVar ++;
 }

options;
data;
ngOnInit() {
 // alert("static: "+DiscretBarChartComponent.staticVar);
 //alert("Component d: "+this.d);
 //alert(this.sizeBar)

  //alert("width"+this.width);
  //alert("length: "+document.getElementsByClassName('inner').length);
 /*var divs = document.getElementsByClassName('inner')[0];
 divs.setAttribute("style","width:"+this.width+"px") ;
 if(document.getElementsByClassName('inner')[1]!=null){
  divs = document.getElementsByClassName('inner')[1];
  
  divs.setAttribute("style","width:"+this.width+"px") ;
 }

 if(document.getElementsByClassName('inner')[2]!=null){
  divs = document.getElementsByClassName('inner')[2];
  divs.setAttribute("style","width:"+this.width+"px") ;
 }*/
 /*if(!this.sizeBar)
 this.width=this.d.length*100;
 else this.width=this.d.length*this.sizeBar;*/
 var divs;
 for(var i=0;i<9;i++){
  if(document.getElementsByClassName('inner')[i]!=null){
    this.width=this.d.length*150
  divs = document.getElementsByClassName('inner')[i];
  divs.setAttribute("style","width:"+this.width+"px") ;
  //if(this.showXAxis==null) this.showXAxis=true;
  
  }
 }
  /*var divs = document.getElementById('inner');
  divs.style.width=this.width;*/
  //DiscretBarChartComponent.staticVar --;
 
  this.options = {
    chart: {
    type: 'discreteBarChart',
    height: this.height,//225,//450
  //  this.svg.setAttribute('width',"100%").style({width:'100vw'}),
  //widht:this.w,
    margin : {
    top: 20,
    right: 20,
    bottom: 50,
    left: 55
  },
  x: function(d){return d.label;},
  y: function(d){return d.count;},
  showValues: true,
  valueFormat: function(d){
  return d3.format(',.1f')(d);
},
    duration: 500,
    xAxis: {
    axisLabel: this.XAxis,
    staggerLabels: true,
    showValues: false//this.showXAxis,
    },
    yAxis: {
    axisLabel: this.YAxis,
    axisLabelDistance: -10
    }
  }
}
this.data =/* [
  {key:"aa",
values:[{"lab*el":"Chef Section","count":1.0},{"label":"Secrétaire d'agence\r\n","count":1.0},{"label":"Chef d'Atelier","count":1.0}]
  }];*/
[
{
key: this.key,
values: this.d
}
];

}


}
