import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    private base_url = 'http://localhost:8000/';

    constructor(private http: HttpClient) { }

    register(email:string, password:string, skill_level:string) {
        const body = { 
            "skill_levek": skill_level, 
            "email": email, 
            "password": password
        };
        return this.http.post<any>(this.base_url + 'user/', body);
    }
    login(credential:string) {
        const options = {
            headers: new HttpHeaders({
            'Authorization': 'Basic ' + btoa(credential)
        })
        }
        const data = {}
        return this.http.post<any>(this.base_url + 'login/', data, options);
    }
}