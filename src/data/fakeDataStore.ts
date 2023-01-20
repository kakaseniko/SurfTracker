import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class FakeDataStore {
    daydata = new Array(
        {
            "date" : "16-01-2023",
            "time" : "01:00",
            "breakerType" : "mushy",
            "level" : "beg",
            "details" : {
                "height" : "0.5 m",
                "period" : "6 s",
                "wind-speed" : "12 knot",
                "wind-direciton" : "N",
                "swell-direction" : "NW",
                "water-depth" : "1 m",
                "tide" : "↓",
            }
        },{
            "date" : "16-01-2023",
            "time" : "03:00",
            "breakerType" : "tubes",
            "level" : "beg",
            "details" : {
                "height" : "3 m",
                "period" : "13 s",
                "wind-speed" : "5 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↑",
            }
        },{
            "date" : "16-01-2023",
            "time" : "05:00",
            "breakerType" : "flat",
            "level" : "-",
            "details" : {
                "height" : "0.2 m",
                "period" : "3 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "07:00",
            "breakerType" : "mushy",
            "level" : "beg",
            "details" : {
                "height" : "2 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "09:00",
            "breakerType" : "tubes",
            "level" : "adv",
            "details" : {
                "height" : "3 m",
                "period" : "12 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↑",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "11:00",
            "breakerType" : "tubes",
            "level" : "int",
            "details" : {
                "height" : "2 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↑",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "13:00",
            "breakerType" : "mushy",
            "level" : "beg",
            "details" : {
                "height" : "2 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "15:00",
            "breakerType" : "mushy",
            "level" : "beg",
            "details" : {
                "height" : "2 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "17:00",
            "breakerType" : "mushy",
            "level" : "beg",
            "details" : {
                "height" : "2 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "19:00",
            "breakerType" : "mushy",
            "level" : "beg",
            "details" : {
                "height" : "2 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "21:00",
            "breakerType" : "mushy",
            "level" : "beg",
            "details" : {
                "height" : "2 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "23:00",
            "breakerType" : "mushy",
            "level" : "beg",
            "details" : {
                "height" : "2 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        }
    )
    weekdata = new Array(
        {
            "date" : "16-01-2023",
            "time" : "01:00",
            "breakerType" : "tubes",
            "level" : "intermediate",
            "details" : {
                "height" : "3 m",
                "period" : "13 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "03:00",
            "breakerType" : "flat",
            "level" : "beginner",
            "details" : {
                "height" : "0.3 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "05:00",
            "breakerType" : "mushy",
            "level" : "beginner",
            "details" : {
                "height" : "2 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "07:00",
            "breakerType" : "mushy",
            "level" : "beginner",
            "details" : {
                "height" : "2 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "09:00",
            "breakerType" : "mushy",
            "level" : "beginner",
            "details" : {
                "height" : "2 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "11:00",
            "breakerType" : "flat",
            "level" : "beginner",
            "details" : {
                "height" : "0.2 m",
                "period" : "8 s",
                "wind-speed" : "5 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
        {
            "date" : "16-01-2023",
            "time" : "13:00",
            "breakerType" : "tubes",
            "level" : "beginner",
            "details" : {
                "height" : "2 m",
                "period" : "8 s",
                "wind-speed" : "10 knot",
                "wind-direciton" : "NW",
                "swell-direction" : "N",
                "water-depth" : "1.4 m",
                "tide" : "↓",
            }
        },
    )
}