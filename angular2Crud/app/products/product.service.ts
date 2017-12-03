import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import './rxjs-extensions';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Product } from './product';

@Injectable()
export class ProductService {

    private _productUrl = 'api/products/products.json';

    constructor(private _http: Http) {

    }

    getProducts():  Observable<Product[]> {
        return this._http.get(this._productUrl).map((response: Response) => <Product[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<Product> {
        return this.getProducts()
            .map((products: Product[]) => products.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}