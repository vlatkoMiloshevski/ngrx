import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    constructor() { }

    errorHandler(error) {
        console.log(error);
    }
}
