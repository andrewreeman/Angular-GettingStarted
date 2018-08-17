import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators"

@Injectable({
    providedIn: 'root'
})
export default class ProductService {
    private productUrl: string = 'api/products/products.json'

    constructor(private client: HttpClient) {}

    getProducts(): Observable<IProduct[]> {        
    return this.client.get<IProduct[]>(this.productUrl)
        .pipe(
            tap(data => console.log("All data: " + JSON.stringify(data))),
            catchError(this.handleError)                
        )      
    }

    handleError(err: HttpErrorResponse) {
        let errorMessage = ''

        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occured ${err.error.message}`
        }
        else {
            errorMessage = `Server returned code: ${err.status}, message is: ${err.message}`
        }

        return throwError(errorMessage)
    }
    
}