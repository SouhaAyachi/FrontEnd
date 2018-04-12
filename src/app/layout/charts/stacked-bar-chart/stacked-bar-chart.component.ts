import { Component, OnInit,Input,Output,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
 // deepWatchData: true
})
export class StackedBarChartComponent implements OnInit {

  @Input() d;
  @Input() XLabel : String;
  @Input() YLabel : String;
  @Input() height;
  options;
  data;
  api;
  h;
  
  constructor() { }
  
   updateChart(){
    this.api.updateChart();
 }
  ngOnInit() {

    if(this.height==null)
        this.h=450;
     else this.h=this.height;   
    this.options = {
      chart: {
          type: 'multiBarHorizontalChart',
          height: this.h,//450
          margin : {
              top: 20,
              right: 20,
              bottom: 45,
              left: 180
          },
          clipEdge: true,
          duration: 500,
          stacked: true,
          xAxis: {
              axisLabel: this.XLabel,
              axisLabelDistance: 20,
              //axisLabelAlign: "center",
              showMaxMin: false,
             /* tickFormat: function(d){
                  return d3.format(',f')(d);
              }*/
          },
          yAxis: {
              axisLabel: this.YLabel,
              axisLabelDistance: 0,
              tickFormat: function(d){
                  return d3.format(',.1f')(d);
              }
          }
      }
  };

this.data=this.d;
//tansech tasti x=0 ma3andhech b
/*[
    {key: 'a', values: [
      {x: "s", y: 5}// and more for more on the X axis
    ]},//, vAxis: 1
    {key: 'b', values: [
      {x:"s", y: 5} // and more for more on the X axis
    ]} //, vAxis: 1 and maybe more for more colors
]*/
/*[
  {key: 'a', values: [
    {x: "0", y: 5},
    {x: "1", y: 5},
    {x: "2", y: 5} // and more for more on the X axis
  ]},//, vAxis: 1
  {key: 'b', values: [
    {x:"0", y: 5},
    {x: "1", y: 5},
    {x: "2", y: 5} // and more for more on the X axis
  ]} //, vAxis: 1 and maybe more for more colors
]*/

/*[{
  values : [["2 Day", 103.89], ["NextDay", 107.41], ["Ground", 428.75]],
  key : "FedEx"
}, {
  values : [["2 Day", 0], ["NextDay", 0], ["Ground", 117.8]],
  key : "UPS"
}]*/

/*


  nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
      .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.1)    //Distance between each group of bars.
    ;

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#chart1 svg')
        .datum(exampleData())
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});



function exampleData() {
    return {
      this.da [{
        "values" : [["2 Day", 103.89], ["NextDay", 107.41], ["Ground", 428.75]],
        "key" : "FedEx"
    }, {
        "values" : [["2 Day", 0], ["NextDay", 0], ["Ground", 117.8]],
        "key" : "UPS"
    }]


  };
}


/*
  this.data = generateData();

  /* Random Data Generator (took from nvd3.org) 
  function generateData() {
      return stream_layers(3,50+Math.random()*50,.1).map(function(data, i) {
          return {
              key: 'Stream' + i,
              values: data
          };
      });
  }

  /* Inspired by Lee Byron's test data generator. 
  function stream_layers(n, m, o) {
      if (arguments.length < 3) o = 0;
      function bump(a) {
          var x = 1 / (.1 + Math.random()),
              y = 2 * Math.random() - .5,
              z = 10 / (.1 + Math.random());
          for (var i = 0; i < m; i++) {
              var w = (i / m - y) * z;
              a[i] += x * Math.exp(-w * w);
          }
      }
      return d3.range(n).map(function() {
          var a = [], i;
          for (i = 0; i < m; i++) a[i] = o + o * Math.random();
          for (i = 0; i < 5; i++) bump(a);
          return a.map(stream_index);
      });
  }

  /* Another layer generator using gamma distributions. 
  function stream_waves(n, m) {
      return d3.range(n).map(function(i) {
          return d3.range(m).map(function(j) {
              var x = 20 * j / m - i / 3;
              return 2 * x * Math.exp(-.5 * x);
          }).map(stream_index);
      });
  }

  function stream_index(d, i) {
      return {x: i, y: Math.max(0, d)};
  }
*/
  }


}
