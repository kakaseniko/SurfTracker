import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    private base_url = 'http://localhost:8000/';

   // private base_url = 'https://143.244.197.166:8443/'


    constructor(private http: HttpClient) { }

    register(email:string, password:string, skill_level:string) {
        const body = { 
            "skill_level": skill_level, 
            "email": email, 
            "password": password
        };
        return this.http.post<any>(this.base_url + 'user/', body);
    }
    login(credential:string) {
        const options = {
            headers: new HttpHeaders({
            'Authorization': 'Basic ' + btoa(credential),
            'Access-Control-Allow-Origin': '*'
        })
        }
        return this.http.get<any>(this.base_url + 'login/', options);
    }
    deleteAccount(token: string) {
        const options = {
            headers: new HttpHeaders({
            'Authorization': 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'
            })
        }
        return this.http.delete<any>(this.base_url + 'delete-account/', options);
    }

}
