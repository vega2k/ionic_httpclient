import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {Observable} from "rxjs/Observable";
import {Product} from "../../model/product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products:Observable<Product[]>;

  constructor(public navCtrl: NavController, public restProvider:RestProvider) {

  }

  ionViewDidLoad() {
    this.products = this.restProvider.getProducts();
  }

  navToProductDetail(product:Product) {
    this.navCtrl.push("ProductPage",{product:product});
  }

  crateProduct(){
    this.navCtrl.push("ProductPage",{product:{}});
  }
}
