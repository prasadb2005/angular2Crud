import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from './customer';
import { CustomerService} from './customer.service';

@Component({
    styleUrls: ['app/customers/customerStyle.css'],
    templateUrl: 'app/customers/customers.component.html'
})

export class CustomerComponent implements OnInit { 
    customers: Customer[];
    errorMessage: string;
    constructor(public _route: ActivatedRoute, public _router: Router, private _customerService: CustomerService){

    }
    ngOnInit(): void {
        this._customerService.getCustomers().subscribe(customers => this.customers = customers
        , error => this.errorMessage = <any>error);
    }
 } 