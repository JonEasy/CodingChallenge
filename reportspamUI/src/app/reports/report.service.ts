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
      tap(reports => console.log(`Fetched reports`)),
      map( response => response as Report[]),
      catchError(this.handleError<Report[]>('getReports'))
    )
  }

  resolveReport(report: Report): Observable<Object> {
    const params = new HttpParams().set('state', 'CLOSED')
    console.log(`Report resolved is ${report.id}`)
    console.log(`Report resolved is ${report.state}`)
    return this.http.put(`${this.apiServeUrl}/reports/${report.id}`,params)
  }

  blockContent(resourceId: string, resourceType: string ): Observable<Object> {
    console.log(typeof resourceId)
    console.log(resourceType)

    const referenceResource = new ReferenceResource(resourceType, resourceId)
    console.log(referenceResource)
    return this.http.post(`${this.apiServeUrl}/block`,referenceResource, this.httpOptions)

  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }

}

class ReferenceResource {
  resourceType: string
  resourceId: string

  constructor(type: string, resourceId: string) {
    this.resourceType = type
    this.resourceId = resourceId
  }
}
