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
    headers: new HttpHeaders({'Content-Type': 'application/json'})
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
    const options = {params: new HttpParams().set('state', 'OPEN')}
    return this.http.put(`${this.apiServeUrl}/${report.id}`, options)
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }

}
