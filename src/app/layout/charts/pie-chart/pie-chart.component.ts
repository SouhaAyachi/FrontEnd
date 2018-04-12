import { Component, OnInit,Input,Output,EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() d;
  @Input() height;
  @Input() legend=true;
  @Input() threshold="0.10";
  h;
  options;
  data;
  ch:SimpleChange
  constructor() { }
/*ngOnChanges(ch:SimpleChange){
    this.ch['data']=this.d;
}*/
  ngOnInit() {
      if(this.height==null) this.h=550;
      else this.h=this.height;
    this.options = {
      chart: {
          type: 'pieChart',
          height: this.h,//500,              
          x: function(d){return d.label;},
          y: function(d){return d.count;},
          //showLabels: true,
          duration: 500,
          labelThreshold: this.threshold,
          labelSunbeamLayout: true,
          showLegend: this.legend,
          legend: {
              margin: {
                  top: 5,
                  right: 35,
                  bottom: 5,
                  left: 0
              }
          },
      }
  };

  this.data=this.d;

}


}



