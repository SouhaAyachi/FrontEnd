import { Component, OnInit } from '@angular/core';
import { RecrutementService } from '../../recrutement.service';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-data-table1',
  templateUrl: './data-table1.component.html',
  styleUrls: ['./data-table1.component.scss']
})
export class DataTable1Component implements OnInit {

  
item: any = [];
dtTrigger: Subject<any> = new Subject();

  constructor(private divService: RecrutementService) { }
  dtOptions: DataTables.Settings = {};

  ngOnInit(): 
  
  void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  
    this.divService.sessions().subscribe( result => { this.item = result;
    console.log(this.item);
    this.dtTrigger.next();})
  
  }
}
