import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://6142a98ac8700e00178cfedb.mockapi.io/api/v1/tutorials';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: { title: string; description: string }): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(
    id: string,
    data: {
      title: string;
      description: string;
      published: boolean;
      id?: string;
    }
  ): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByTitle(title: string): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
