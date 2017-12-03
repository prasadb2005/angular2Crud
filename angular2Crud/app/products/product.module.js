"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var product_list_component_1 = require('./product-list.component');
var product_detail_component_1 = require('./product-detail.component');
var product_detail_guard_service_1 = require('./product-detail-guard.service');
var product_edit_guard_service_1 = require('./product-edit-guard.service');
var product_component_1 = require('./product.component');
var product_filter_pipe_1 = require('./product-filter.pipe');
var product_service_1 = require('./product.service');
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild([
                    { path: 'products', component: product_list_component_1.ProductListComponent },
                    { path: 'product/add', component: product_component_1.ProductComponent },
                    { path: 'product/:id', canActivate: [product_detail_guard_service_1.ProductDetailGuard], component: product_detail_component_1.ProductDetailComponent },
                    { path: 'product/edit/:id', canActivate: [product_edit_guard_service_1.ProductEditGuard], component: product_component_1.ProductComponent }
                ])
            ],
            declarations: [product_list_component_1.ProductListComponent, product_detail_component_1.ProductDetailComponent, product_filter_pipe_1.ProductFilterPipe, product_component_1.ProductComponent],
            providers: [product_service_1.ProductService, product_detail_guard_service_1.ProductDetailGuard, product_edit_guard_service_1.ProductEditGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map