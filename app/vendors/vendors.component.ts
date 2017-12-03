import { OnInit, OnDestroy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendors } from './vendors'
import { VendorService } from './vendor.service';
@Component({
    templateUrl: 'app/vendors/vendors.component.html'
})

export class VendorsComponent{
    vendors: Vendors[];
    errorMessage: string;
    constructor(public _route: ActivatedRoute, public _router: Router, private _vendorService: VendorService){

    }
    ngOnInit(): void {
        this._vendorService.getVendors().subscribe(vendors => this.vendors = vendors
        , error => this.errorMessage = <any>error);
    }
}