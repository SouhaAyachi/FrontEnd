import { Component, OnInit } from '@angular/core';
import { EmpDiversiteService } from '../employe-diversite.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-emp-divers-ver2',
  templateUrl: './emp-divers-ver2.component.html',
  styleUrls: ['./emp-divers-ver2.component.scss']
})
export class EmpDiversVer2Component implements OnInit {

  constructor(private divService: EmpDiversiteService,private modalService: NgbModal) { }

  nbEmpParGenre;
  ageParGenre;
  ancienneteParGenre;

  nbEmpParStructure;
  ageParStructure;
  ancienneteParStructure;

  nbEmpParGrade;
  ageParGrade;
  ancienneteParGrade;

  nbEmpTotal;
  ageMoyen;
  ancienneteMoyenne;

  mesure="genre";
  Pie=true;
  Bar=false;
  
  ParGenre=true;
  ParStructure=false;
  ParGrade=false;

  closeResult;

  ngOnInit() {
    //genre
    this.divService.empParSex("nb").subscribe(data=>{this.nbEmpParGenre=data});
    this.divService.empParSex("age").subscribe(data=>{this.ageParGenre=data});
    this.divService.empParSex("anciennete").subscribe(data=>{this.ancienneteParGenre=data});

    //structure
    this.divService.EmpDiversiteParQQChose("nb","structure").subscribe( data => {this.nbEmpParStructure =data;});
    this.divService.EmpDiversiteParQQChose("ageMoyen","structure").subscribe( data => {this.ageParStructure =data;});
    this.divService.EmpDiversiteParQQChose("anciennete","structure").subscribe( data => {this.ancienneteParStructure =data;}); 

    //Grade
    this.divService.EmpDiversiteParQQChose("nb","grade").subscribe( data => {this.nbEmpParGrade =data;});
    this.divService.EmpDiversiteParQQChose("ageMoyen","grade").subscribe( data => {this.ageParGrade =data;});
    this.divService.EmpDiversiteParQQChose("anciennete","grade").subscribe( data => {this.ancienneteParGrade =data;});
    


    this.divService.nbTotalEmp().subscribe( res => {this.nbEmpTotal =parseInt(res['count'])});
    this.divService.ageMoyenEmp().subscribe( res => {this.ageMoyen =parseInt(res['count'])});   
    this.divService.ancienneteeMoyenne().subscribe( res => {this.ancienneteMoyenne =parseInt(res['count'])});   
  

  }

  controlVisibility(s1,s2,s3){
    var elemVisibleList =document.getElementsByClassName(s1);
    var elemNonVisibleList2=document.getElementsByClassName(s2);
    var elemNonVisibleList3=document.getElementsByClassName(s3);
    /*alert("elemVisibleList length"+elemVisibleList.length);
    alert(s2);
    alert("elemNonVisibleList2 length"+elemNonVisibleList2.length);
    alert("elemNonVisibleList3 length"+elemNonVisibleList3.length);*/
    for(var i=0;i<elemVisibleList.length;i++){
     (<HTMLElement> elemVisibleList[i] ).style.display="block";
     }
     for(var i=0;i<elemNonVisibleList2.length;i++){
      (<HTMLElement> elemNonVisibleList2[i] ).style.display="none";
      }
     if(elemNonVisibleList3!=null){
      for(var i=0;i<elemNonVisibleList3.length;i++){
        (<HTMLElement> elemNonVisibleList3[i] ).style.display="none";
        }
     }

  }
   Par(s:String){
    switch(s){
      case "genre":this.ParGenre=true;this.ParStructure=false;this.ParGrade=false;
     // this.controlVisibility("ParGenre","ParStructure","ParGrade");
      this.mesure="Genre";
      ;break;
      case "structure":// alert("Par Structure");
      //this.controlVisibility("ParStructure","ParGenre","ParGrade");
      this.ParGenre=false;this.ParStructure=true;this.ParGrade=false;
      this.mesure="Structure";
      ;break;
      case "grade":
     // this.controlVisibility("ParGrade","ParStructure","ParGenre");
     this.ParGenre=false;this.ParStructure=false;this.ParGrade=true;
      this.mesure="grade";
      ;break;


    }
  }
  changeGraphe(s:String){
    switch(s){
    case "Pie":
    //this.controlVisibility("Pie","Bar","");
    this.Pie=true;this.Bar=false;
    ;break;
    case "Bar":
   // this.controlVisibility("Bar","Pie","");
    this.Bar=true;this.Pie=false;
    ;break;
    }
  }

  open(content) {
    this.modalService.open(content,{size: 'lg'}).result.then((result) => {
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

}
