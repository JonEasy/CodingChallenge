import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
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
    return this.http.get<Report[]>(`${this.apiServeUrl}/reports`).pipe(
      tap(reports => console.log(`Fetched reports`)),
      catchError(this.handleError<Report[]>('getReports'))
    )
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }

}
