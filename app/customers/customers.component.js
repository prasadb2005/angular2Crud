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
var customer_service_1 = require('./customer.service');
var CustomerComponent = (function () {
    function CustomerComponent(_route, _router, _customerService) {
        this._route = _route;
        this._router = _router;
        this._customerService = _customerService;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._customerService.getCustomers().subscribe(function (customers) { return _this.customers = customers; }, function (error) { return _this.errorMessage = error; });
    };
    CustomerComponent = __decorate([
        core_1.Component({
            styleUrls: ['app/customers/customerStyle.css'],
            templateUrl: 'app/customers/customers.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, customer_service_1.CustomerService])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customers.component.js.map