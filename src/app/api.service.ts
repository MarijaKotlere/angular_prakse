import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  // GET request
  getComments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/comments`);
  }

  // POST request
  addComment(name: any, message: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let post = {
      name: name,
      message: message
    }
    return this.http.post<any>(`${this.apiUrl}/comment`, post, { headers });
  }

  // POST request
  updateComment(id: number, name: any, message: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let post = {
      name: name,
      message: message
    }
    const url = `${this.apiUrl}/comment/${id}`;
    return this.http.post<any>(url, post, { headers });
  }

  // DELETE request
  deleteComment(id: number): Observable<any> {
    const url = `${this.apiUrl}/comment/${id}/delete`;
    return this.http.post<any>(url,{});
  }

}
