import { Component, Input } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: "pm-product-detail",
    styleUrls: [ "./product-detail.component.css" ],
    templateUrl: "./product-detail.component.html"

})
export class ProductDetailComponent {
    @Input()
    product: IProduct
    pageTitle: string = "test title"

}