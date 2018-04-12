import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-general-line-chart',
  templateUrl: './general-line-chart.component.html',
  styleUrls: ['./general-line-chart.component.scss']
})
export class GeneralLineChartComponent implements OnInit {

  @Input() d;
  @Input()d2=[];
  @Input() key;
  @Input() key2="";
  @Input() XAxis;
  @Input() YAxis;
  constructor() { }
  data;
  options;
  ngOnInit() {
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
       //useInteractiveGuideline: true,
        xAxis: {
          axisLabel: this.XAxis,
        },
        yAxis: {
          axisLabel: this.YAxis,
          tickFormat: function(d){
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -10
        },
       
      }
    };
  
    this.data =[
      {
        values: this.d,    //values - represents the array of {x,y} data points
        key: this.key, //key  - the name of the series.
        color: '#ff7f0e'  //color - optional: choose your own line color.
      },
      {
        values: this.d2,    //values - represents the array of {x,y} data points
        key: this.key2, //key  - the name of the series.
        color: '#2ca02c'  //color - optional: choose your own line color.//#7777ff
      },
    ]//this.sinAndCos();/*
    

  }

}
