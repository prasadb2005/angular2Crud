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
var vendor_service_1 = require('./vendor.service');
var VendorsComponent = (function () {
    function VendorsComponent(_route, _router, _vendorService) {
        this._route = _route;
        this._router = _router;
        this._vendorService = _vendorService;
    }
    VendorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._vendorService.getVendors().subscribe(function (vendors) { return _this.vendors = vendors; }, function (error) { return _this.errorMessage = error; });
    };
    VendorsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/vendors/vendors.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, vendor_service_1.VendorService])
    ], VendorsComponent);
    return VendorsComponent;
}());
exports.VendorsComponent = VendorsComponent;
//# sourceMappingURL=vendors.component.js.map