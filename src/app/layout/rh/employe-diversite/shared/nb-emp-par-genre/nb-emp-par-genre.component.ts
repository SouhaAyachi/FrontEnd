import { Component, OnInit } from '@angular/core';
import { EmpDiversiteService } from '../../employe-diversite.service';

@Component({
  selector: 'app-nb-emp-par-genre',
  templateUrl: './nb-emp-par-genre.component.html',
  styleUrls: ['./nb-emp-par-genre.component.scss']
})
export class NbEmpParGenreComponent implements OnInit {

  options;
  data;
  
  constructor(private divService: EmpDiversiteService) { }

  ngOnInit() {
    this.options = {
            chart: {
                type: 'pieChart',
                height: 500,              
                x: function(d){return d.label;},
                y: function(d){return d.count;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
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


  

   this.divService.empParSex("nb").subscribe( data => this.data = data);//map(result => result); {res.map(resultat=>resultat)}

  }

  

}
