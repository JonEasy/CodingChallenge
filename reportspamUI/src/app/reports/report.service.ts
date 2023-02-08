import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";
import {environment} from '../../environments/environment';
import {Report} from "./report.component";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiServeUrl = environment.apiBaseUrl;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' })
  }


  constructor(private http: HttpClient) {
  }

  getReports(): Observable<Report[]> {
    return this.http.get(`${this.apiServeUrl}/reports`).pipe(
      map( response => response as Report[]),
      tap(reports => console.log(`Fetched reports`)),
      catchError(this.handleError<Report[]>('getReports'))
    )
  }

  resolveReport(report: Report) {
    const params = new HttpParams().set('state', 'OPEN')
    console.log(params)
    return this.http.put(`${this.apiServeUrl}/reports/${report.id}?state=CLOSED`,params)
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }

}
