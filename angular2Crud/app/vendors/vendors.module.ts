import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VendorsComponent } from './vendors.component';
import { VendorService } from './vendor.service'

@NgModule({
    imports:[
        RouterModule.forChild([
            {path: 'vendors', component: VendorsComponent}
        ])
    ],
    declarations: [VendorsComponent],
    providers:[VendorService]
})

export class VendorsModule { }
