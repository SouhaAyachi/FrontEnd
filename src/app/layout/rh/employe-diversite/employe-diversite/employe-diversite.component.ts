import { Component, OnInit,ViewEncapsulation ,ChangeDetectionStrategy,Input,ViewChild,ViewChildren
,QueryList,  ElementRef,AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { EmpDiversiteService } from '../employe-diversite.service';
import 'rxjs/add/operator/map';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {StackedBarChartComponent}  from '../../../charts/stacked-bar-chart/stacked-bar-chart.component';
import {DiscretBarChartComponent}  from '../../../charts/discret-bar-chart/discret-bar-chart.component';



declare let nvD3: any;
declare let nv:any;
@Component({
  selector: 'app-employe-diversite.component',
  templateUrl: './employe-diversite.component.html',
  styleUrls: ['./employe-diversite.component.scss'],
    encapsulation: ViewEncapsulation.None,
   // changeDetection: ChangeDetectionStrategy.OnPush
})

export class EmployeDiversiteComponent implements OnInit {

  @ViewChildren(StackedBarChartComponent) userSelect: QueryList<StackedBarChartComponent>;
  @ViewChild('embauchID') discretBarChart: DiscretBarChartComponent;
  

      year;    
      options;
      data;
      nbEmpTotal;
      ageMoyen;
      ancienneteMoyenne;
      nb_emp_par_genre;
      nb_emp_par_categorie;
      nb_emp_par_grade;
      nb_emp_par_fonction;
      nb_emp_par_poste;
      nb_emp_par_structure;
      age_moyen_par_structure;
      anciennete_moyenne_par_structure;
      nbEmbauche;
      yearsEmbauche=new Array();
      yearEmbauche;//=(new Date()).getFullYear();
      nbEmbaucheperYear;
      delai;
      ///Bool//
     nbParVar="genre";
      /////////////////////////////

	  
	  ////////////////////////////
		title = 'app';
		myCount: number = 10;
		countChange(event) {
			this.myCount = event;
		}
	///////////////////////////////
    closeResult: string;

  open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
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

  constructor(private divService: EmpDiversiteService,private modalService: NgbModal,private cd: ChangeDetectorRef) { }
     
  nbParStructure(){
      return  this.divService.EmpDiversiteParQQChose("nb","structure").subscribe( data => data);
  }

  ngOnInit() {
    this.year=(new Date()).getFullYear();
    this.divService.empParSex("nb").subscribe(res=>{this.nb_emp_par_genre=res;});
    this.divService.nbTotalEmp().subscribe( res => {this.nbEmpTotal =parseInt(res['count'])});
    this.divService.ageMoyenEmp().subscribe( res => {this.ageMoyen =parseInt(res['count'])});   
    this.divService.ancienneteeMoyenne().subscribe( res => {this.ancienneteMoyenne =parseInt(res['count'])});   
   this.divService.EmpDiversiteParQQChose("nb","structure").subscribe( data => {this.nb_emp_par_structure =data;});
      // this.nb_emp_par_structure =this.nbParStructure();
   ////////////
    this.divService.EmpDiversiteParQQChose("nb","categorie").subscribe( data => {this.nb_emp_par_categorie =data; });
    this.divService.EmpDiversiteParQQChose("nb","fonction").subscribe( data => {this.nb_emp_par_fonction =data;});
    this.divService.EmpDiversiteParQQChose("nb","grade").subscribe( data => {this.nb_emp_par_grade =data;});
    this.divService.EmpDiversiteParQQChose("nb","poste").subscribe( data => {this.nb_emp_par_poste =data;});
    this.divService.EmpDiversiteParQQChose("ageMoyen","structure").subscribe( data => {this.age_moyen_par_structure =data;});
    this.divService.EmpDiversiteParQQChose("anciennete","structure").subscribe( data => {this.anciennete_moyenne_par_structure =data;});
   //witha ma3andi 7ata session sné ? quoi faire
    //this.delaiPerYear((new Date()).getFullYear());
  this.divService.recDelais().subscribe(data =>
    {   
        let  d =  JSON.stringify(data);
        let array = JSON.parse( d );
       array.map(d =>{
        var x= d['year'];
        
        if(x==(new Date()).getFullYear())  {
        var datum= d['data']
        this.delai=null;
           this.delai = datum; 
       }
        })
    } 
  );

  this.divService.nbEmbauche().subscribe(data=>
    {
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
        this.nbEmbauche=datum;
       }
        });
       
    }
    )

}
changeToPie_nb_categorie(){
    var elm=document.getElementById("nb_categorie_pie");
    elm.style.display="block";
    elm.style.zIndex="0";
    var elm=document.getElementById("nb_categorie_bar");
    elm.style.display="none";
    elm.style.zIndex="1";

}
changeToBar_nb_categorie(){
    var elm=document.getElementById("nb_categorie_pie");
    elm.style.display="none";
    elm.style.zIndex="1";
    var elm=document.getElementById("nb_categorie_bar");
    elm.style.display="block";
    elm.style.zIndex="0";

}
changeGraphe(s1,s2,s3){
    var elm=document.getElementById(s1);
    alert(s1);
    elm.style.display="block";
    elm.style.zoom="50%";elm.style.zoom="100%";
    var elm=document.getElementById(s2);
    elm.style.display="none";
   // elm.style.zIndex="0";
  // var elm=document.getElementById(s3);
  // elm.style.display="none";

}
nbPar(s: String){
    var elmGenre=document.getElementById("nbParGenre");
    //var elmGenrePie=document.getElementById("nbParGenrePie");
    var elmStructure=document.getElementById("nbParStructure");
    var elmGrade=document.getElementById("nbParGrade");
    alert("nbPar am in");
    switch(s){
        case 'genre' :alert("genre");
        elmGenre.style.display= "block";elmStructure.style.display="none";elmGrade.style.display="none";
        this.nbParVar="genre";this.changeGraphe("nbParGenrePie","nbParGenreBar","");
        break;
        case 'structure' :alert("structure");
        elmGenre.style.display= "none";elmGrade.style.display="none";
        elmStructure.style.display="block";
        this.nbParVar="structure";this.changeGraphe("nbParStructurePie","nbParStructureBar","");
        break;
        case 'grade' :alert("grade");
        elmGenre.style.display= "none";elmStructure.style.display="none";
        this.nbParVar="grade";
        elmGrade.style.display="block";
        this.changeGraphe("nbParGradePie","nbParGradeBar","");
        case 'fonction' :;break;
    }
}
nbParChangeGraphe(s){
    switch(this.nbParVar){
        case "genre":
       if(s=="pie") {alert("pie");this.changeGraphe("nbParGenrePie","nbParGenreBar","")};
       if(s=="bar") {alert("qlik bar");this.changeGraphe("nbParGenreBar","nbParGenrePie","")};
      // if(s=="tab") this.changeGraphe("nbParGenreTab","nbParGenreBar","nbParGenrePie");
       break;
        
       case "structure":
        if(s=="pie") this.changeGraphe("nbParStructurePie","nbParStructureBar","");
        if(s=="bar") this.changeGraphe("nbParStructureBar","nbParStructurePie","");
        break;
       
        case "grade":
        if(s=="pie") this.changeGraphe("nbParGradePie","nbParGradeBar","");
        if(s=="bar") this.changeGraphe("nbParGradeBar","nbParGradePie","");
        break;
    }
}

embauchePerYear(year){
   // alert("am here");
    this.yearEmbauche=year;
    this.divService.nbEmbauche().subscribe(data=>
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
    this.divService.recDelais().subscribe( data =>
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
}
//https://stackoverflow.com/questions/40427748/viewchild-always-returns-undefined
//https://github.com/angular/material2/issues/3922
//https://github.com/NativeScript/NativeScript/issues/2380