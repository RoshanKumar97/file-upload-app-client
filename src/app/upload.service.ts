import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private BASE_URL = 'http://localhost:8080/user';

  constructor(private http:HttpClient) { }

  upload(file:File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.BASE_URL}/upload`,formData);
  }

  getUsers(page: number, size: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}?page=${page}&size=${size}`);
  }
}
