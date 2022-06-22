import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { BookingDetail } from './booking'

@Injectable({
    providedIn: 'root',
})
export class BookingService {
    constructor(private httpClient: HttpClient) {}

    private url = "http://159.138.240.167:8082/v1/booking";
    // private url = 'http://localhost:8080/v1/booking'

    httpOption = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }

    getListBooking(): Observable<BookingDetail[]> {
        console.log('getListBooking() running .. ')
        return this.httpClient.get<BookingDetail[]>(this.url + '/admin/', this.httpOption)
    }

    getBookingByRoom(
        room: String,
        startDate: String,
        endDate: String
    ): Observable<BookingDetail[]> {
        return this.httpClient.get<BookingDetail[]>(
            this.url +
                '/admin/room?room=' +
                room +
                '&startDate=' +
                startDate +
                '&endDate=' +
                endDate,
            this.httpOption
        )
    }
    getBookingByStatus(
        status: Boolean,
        startDate: String,
        endDate: String
    ): Observable<BookingDetail[]> {
        return this.httpClient.get<BookingDetail[]>(
            this.url +
                '/admin/status?status=' +
                status +
                '&startDate=' +
                startDate +
                '&endDate=' +
                endDate,
            this.httpOption
        )
    }

    getBookingByDate(startDate: String, endDate: String): Observable<BookingDetail[]> {
        return this.httpClient.get<BookingDetail[]>(
            this.url + '/admin/date/?startDate=' + startDate + '&endDate=' + endDate,
            this.httpOption
        )
    }

    getBookingsByFilter(
        room: String,
        status: Boolean,
        startDate: String,
        endDate: String
    ): Observable<BookingDetail[]> {
        return this.httpClient.get<BookingDetail[]>(
            this.url +
                '/admin/filter/?room=' +
                room +
                '&status=' +
                status +
                '&startDate=' +
                startDate +
                '&endDate=' +
                endDate,
            this.httpOption
        )
    }
}
