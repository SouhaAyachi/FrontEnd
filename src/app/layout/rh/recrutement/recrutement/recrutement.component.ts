import { Component, OnInit,ViewChildren,QueryList,ViewChild } from '@angular/core';
import { RecrutementService } from '../recrutement.service';
import 'rxjs/add/operator/map';
/*Child Component*/
import {StackedBarChartComponent}  from '../../../charts/stacked-bar-chart/stacked-bar-chart.component';
import {DiscretBarChartComponent}  from '../../../charts/discret-bar-chart/discret-bar-chart.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


declare let nvD3: any;
/**************** */

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.scss'],
  
})
export class RecrutementComponent implements OnInit {

  @ViewChildren(StackedBarChartComponent) userSelect: QueryList<StackedBarChartComponent>;
  @ViewChild('miaw') discretBarChart: DiscretBarChartComponent;
//  @ViewChild('embauchID') discretBarChart: DiscretBarChartComponent;

  delai;
  year; 
  nbEmbauche:any;
  yearsEmbauche=new Array();
  yearEmbauche;//=(new Date()).getFullYear();
  nbEmbaucheperYear;
  EvolutionNbEmbauche;
  closeResult;
  tauxEffectif;
  nbEntree;
  nbRetraite;
  
  constructor(private recS:RecrutementService,public modalService: NgbModal) { }


  ngOnInit() {
    //alert("ngOnInit ==> 1");
    
    this.recS.evolutionNbEmbauche("nbEmbauche").subscribe(data => this.EvolutionNbEmbauche=data);
    this.recS.evolutionNbEmbauche("taux").subscribe(data => this.tauxEffectif=data);
    this.recS.evolutionNbEmbauche("entree").subscribe(data => this.nbEntree=data);
    this.recS.nbRetraite().subscribe(data => this.nbRetraite=data);
    this.recS.recDelais().subscribe(data =>
     {    
      //alert("Delai ngInit am IN");
          let  d =  JSON.stringify(data);
          let array = JSON.parse( d );
         array.map(d =>{
          var x= d['year'];
          //alert(x);
          if(x==(new Date()).getFullYear())  {
          var datum= d['data']
          this.delai=null;
             this.delai = datum; 
         }
          })
      } 
    );
   // alert("ngOnInit ==> 2");
    this.recS.nbEmbauche().subscribe(data=>
      {
        //alert("Embauch ngInit am IN");
        let  d =  JSON.stringify(data);
        let array = JSON.parse( d );
        array.map(d =>{
          var x= d['key'];
          this.yearsEmbauche.push(x);
        }); this.yearEmbauche= Math.max.apply(null,this.yearsEmbauche);
        array.map(d =>{
          var x= d['key'];
          if(x==this.yearEmbauche)  {
          var datum= d['values']
          this.nbEmbauche=datum;//datum
         // alert(this.nbEmbauche)
         }
          });
         
      }
    );
  //  alert("ngOnInit ==> 3");

  }


  embauchePerYear(year){
    // alert("am here");
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
             //alert("datum: "+JSON.stringify(datum));
             this.nbEmbauche=datum;
             this.discretBarChart.data=[{key:"Nb embauche per year per fonction",
             values:datum}];
             this.nbEmbaucheperYear=datum.length;
             
            }
             })
         }
      )
 }

  delaiPerYear(year){
    this.recS.recDelais().subscribe( data =>
        {   
            let  d =  JSON.stringify(data);
            let array = JSON.parse( d );
           array.map(d =>{
            var x= d['year'];
            if(x==year)  {
            var datum= d['data'];
              this.delai = datum;
             this.userSelect.first.data=datum;
             this.year=year;
             }
          })
        }
   );   
}
public open(content){
  console.log("Debut open");
 this.modalService.open(content).result.then((result) => {
  this.closeResult = `Closed with: ${result}`;
}, (reason) => {
  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
});
console.log("fin open");
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
}

//https://stackoverflow.com/questions/37230545/angular2-oninit-values-returned-from-service-subscribe-function-does-not-ge?rq=1
//https://forum.predix.io/questions/28364/synchronous-call-in-angularjs.html
//structure d'entré 3andi ou pa
//l fonction tnajm tkoun l fonction actuelle mouch elli d5al biha