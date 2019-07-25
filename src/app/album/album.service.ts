import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class AuthService {

    AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';
    authSubject = new BehaviorSubject(false);

    constructor(private httpClient: HttpClient, private storage: Storage) { }



}