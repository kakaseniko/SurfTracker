import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class DateService {

    getWeekDay(date: Date){
        let str = date.toString();
        str = str.split('GMT')[0];
        let splitted = str.split(' ');
        return splitted[0];

    }
    getMonth(date: Date){
        let str = date.toString();
        str = str.split('GMT')[0];

        let splitted = str.split(' ');
        return splitted[1];
    }

    getDay(date: Date){
        let str = date.toString();
         str = str.split('GMT')[0];

        let splitted = str.split(' ');
        return splitted[2];
    }
    getYear(date: Date){
        let str = date.toString();
         str = str.split('GMT')[0];

        let splitted = str.split(' ');
        return splitted[3];
    }
    getHour(date: Date){
        let str = date.toString();
         str = str.split('GMT')[0];

        let splitted = str.split(' ');
        return splitted[4].substring(0, 5);
    }
}