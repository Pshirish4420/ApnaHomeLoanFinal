import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-approved-list',
  templateUrl: './approved-list.component.html',
  styleUrls: ['./approved-list.component.css']
})
export class ApprovedListComponent implements OnInit {
  retriveDoc:any;
  // retriveCibil:any
  retriveApp:any;

  custid:number;

  loanDetails:any= {
    loanId: 0,
    loanPrincipalAmt: 0,
    rateOfInterest: 0,
    loanTenure: 0,
    status: "",
    emiDetails: {
      emiId: 0,
      emiAmtMonnthly: 0,
      emiDueDate: "",
      previousEmiStatus: "",
    }
  }
  

  constructor(public cs:CommonService,public routes:Router) { }

  ngOnInit(): void {
    this.cs.getCustomerdata().subscribe(d=>{
      this.retriveDoc=d;
     })
     }

     checkEmi(customerid:number)
     {
      this.cs.c.customerid=customerid;
      alert(customerid) //9
      this.routes.navigate(['role','accounthead','emi',customerid]);
    //  this.cs.saveLoanDetails(c);
     }

     approved(emi:number,customerid:number,pr:any){
      alert(emi);
      alert(customerid);
      console.log("id "+ customerid)
    //  this.cs.app.cibil.cibil_Score=fc;
      this.cs.saveLoan(emi,customerid,pr).subscribe()
    }
  
}
