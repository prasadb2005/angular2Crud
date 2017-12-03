import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customers.component';
import { CustomerService } from './customer.service';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            { path: 'customers', component: CustomerComponent}
        ])
    ],
    declarations: [CustomerComponent],
    providers: [CustomerService]
})

export class CustomerModule {

} 