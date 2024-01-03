import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RandomNameService {

  readonly apiUrl = `${environment.apiUrl}/names`;

  constructor(private http: HttpClient) { }

  getList(count: number): Observable<string[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("count", count);

    return this.http.get<string[]>(this.apiUrl, { params: queryParams });
  }
}
