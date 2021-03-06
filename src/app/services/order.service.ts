import { AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp) {
  }

  getOrders() {

    //This code below is implemented in all AuthHttp methods:
    /*let headers = new Headers()
    let token = localStorage.getItem('token')
    headers.append('Authorization', 'Bearer ' + token)

    let options = new RequestOptions({ headers: headers })

    return this.http.get('/api/orders', options)*/

    //*** AuthHttp NEEDS TO BE FIXED!! To make it work replace
    // AuthHttp by regular Angular Http and code above

    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
