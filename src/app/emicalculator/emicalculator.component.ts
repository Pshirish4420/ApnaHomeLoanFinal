import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { LoanDetails } from 'app/model/loan-details';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
