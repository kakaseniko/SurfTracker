import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Session } from 'src/app/models/session';

@Injectable({
    providedIn: 'root'
    })

export class SurfSessionService {
    //private base_url = 'http://localhost:8000/';

    private base_url = 'https://143.244.197.166:8443/'


    constructor(private http: HttpClient) { }

    get(token: string) {
        const options = {
            headers: new HttpHeaders({
            'Authorization': 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'
            })
        }
        return this.http.get<any>(this.base_url + 'surfsession/', options);
    }
    post(token: string, surfsession: Session) {
        const options = {
            headers: new HttpHeaders({
            'Authorization': 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'
            })
        }
        const body = { 
            "date_time": surfsession.date + 'T' + surfsession.time,
            "country": surfsession.country,
            "spot": surfsession.spot,
            "rating": surfsession.rating,
        };
        return this.http.post<any>(this.base_url + 'surfsession/', body, options);
    }
}
