import { Component, OnInit } from '@angular/core';
import { EmpDiversiteService } from '../../employe-diversite.service';

@Component({
  selector: 'app-nb-emp-par-fonction',
  templateUrl: './nb-emp-par-fonction.component.html',
  styleUrls: ['./nb-emp-par-fonction.component.scss']
})
export class NbEmpParFonctionComponent implements OnInit {

  constructor(private divService: EmpDiversiteService) { }

  options;
  data;
  ngOnInit() {
  this.options = {
  chart: {
  type: 'discreteBarChart',
  height: 450,
  groupSpacing:1,
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
  return d3.format(',.4f')(d);
  },
  duration: 500,
  xAxis: {
  axisLabel: 'Fonctions',
  staggerLabels : true
  },
  yAxis: {
  axisLabel: 'Nombre demployés',
  axisLabelDistance: -10
  }
  }
  }
  this.divService.EmpDiversiteParQQChose("nb","fonction").subscribe( data => this.data = [
  {
  key: "Nombre employés par fonctions",
  values: data}]);
  
  }
  

}
