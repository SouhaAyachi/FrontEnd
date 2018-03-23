import { Component, OnInit,ViewEncapsulation   } from '@angular/core';
import { EmpDiversiteService } from '../employe-diversite.service';
import 'rxjs/add/operator/map';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
declare let d3: any;
@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Compo1Component implements OnInit {

	  options;
      data;
	  
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

  constructor(private divService: EmpDiversiteService,private modalService: NgbModal) { }


  ngOnInit() {
    this.options = {
            chart: {
                type: 'pieChart',
                height: 500,              
                x: function(d){return d.sexe;},
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
                tooltip: {
                         contentGenerator: function (e) {
                
                          console.log('elementClick in callback', e);
                      
                        }
                  }
            }
        };


  

   this.divService.genreEmp().subscribe( data => this.data = data);//map(result => result); {res.map(resultat=>resultat)}
	/*[
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ];*/

        
  }



}
