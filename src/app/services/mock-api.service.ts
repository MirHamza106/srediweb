// src/app/services/mock-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TableData } from '../Constants/table-data.interface';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {  
  private apiUrl = 'http://localhost:3000/api/table-data'; // Update this with your actual API endpoint

  constructor(private http: HttpClient) { }

  getAllTableData(): Observable<TableData[]> {
    return this.http.get<TableData[]>(this.apiUrl).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}