import { Component, OnInit,Input } from '@angular/core';
import { RecrutementService } from '../../recrutement/recrutement.service';

@Component({
  selector: 'app-embauche-par-year-par-fctn',
  templateUrl: './embauche-par-year-par-fctn.component.html',
  styleUrls: ['./embauche-par-year-par-fctn.component.scss']
})
export class EmbaucheParYearParFctnComponent implements OnInit {

  constructor(private recS:RecrutementService) { }

  @Input() year;
  options;data;
  yearsEmbauche= new Array();
  yearEmbauche;
  closeResult;
  ngOnInit() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
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
          axisLabel: 'Fonction'
        },
        yAxis: {
          axisLabel: 'Nb Embauche',
          axisLabelDistance: -10
        }
      }
    }
    this.recS.nbEmbauche().subscribe(data=>{
        let  d =  JSON.stringify(data);
        let array = JSON.parse( d );
        array.map(d =>{
          var x= d['key'];
          this.yearsEmbauche.push(x);
        }); this.yearEmbauche= Math.max.apply(null,this.yearsEmbauche);
        array.map(d =>{
          var x= d['key'];
          if(x==this.year)  {
          var datum= d['values']
          this.data=[{key:"Nb embauche per year per fonction",
          values:datum}];
         }
          });
         
      }
    );
    
  }


  /*embauchePerYear(year){
     this.yearEmbauche=year;
     var aa=
     this.recS.nbEmbauche().subscribe(data=>
         {
           let  d =  JSON.stringify(data);
           let array = JSON.parse( d );
           array.map(d =>{
             var x= d['key'];
             if(x==year)  {
             var datum= d['values'];
             this.data=[{key:"Nb embauche per year per fonction",
             values:datum}];
            }
             })
         }
      )
 }*/

}
