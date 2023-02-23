export class Session{
    private userId: number;
    private sessionId: number;
    spot: string;
    country: string;
    date: string;
    time: string;
    rating: number;
    details: string;

    constructor(userId: number, sessionId: number, spot: string, country: string, date: string, time:string, rating: number, details: string){
        this.userId = userId;
        this.sessionId = sessionId;
        this.spot = spot;
        this.country = country;
        this.date = date;
        this.time = time;
        this.rating = rating;
        this.details = details;
    }
}