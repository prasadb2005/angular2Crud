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
var product_service_1 = require('./product.service');
var Product_1 = require('./Product');
var ProductComponent = (function () {
    function ProductComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.submitted = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = new Product_1.Product(10, '', '', '', '', 10);
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            if (id) {
                _this.getProduct(id);
            }
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductComponent.prototype.save = function (productForm) {
        this.submitted = true;
        if (!productForm.valid) {
            console.log('form is invalid' + JSON.stringify(this.product));
            return;
        }
        console.log('form is valid' + JSON.stringify(this.product));
        this.productData = JSON.stringify(this.product);
    };
    ProductComponent.prototype.onBack = function () {
        this._router.navigate(['./products']);
    };
    ProductComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/products/product.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map