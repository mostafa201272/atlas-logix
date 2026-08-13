import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  /**
   * HTTP CLIENT SERVICE
   */
  protected readonly http = inject(HttpClient);

  /**
   * GET REQUEST WITH OPTIONAL PARAMS
   * @param url
   * @param params
   * @returns OBSERVABLE
   */
  getData<T>(url: string, params: Record<string, string> = {}): Observable<T> {
    return this.http.get<T>(url, { params }).pipe(
      catchError((error) => {
        return throwError(error);
      }),
    );
  }

  /**
   * GET BLOB (DOCUMENT)
   * @param url ENDPOINT
   * @param contentType BLOB TYPE
   * @returns
   */
  getDocuments(url: string, fileType: string): Observable<unknown> {
    // SET THE REQUEST OPTIONS
    const options = {
      headers: new HttpHeaders({
        'Content-Type': `'application/${fileType}`,
      }),
      responseType: 'blob' as 'json',
    };

    return this.http.get(url, options);
  }

  /**
   * POST REQUEST WITH OPTIONAL BODY
   * @param url
   * @param body
   * @returns
   */
  postData<T>(url: string, body: Record<string, unknown> = {}): Observable<T> {
    return this.http.post<T>(url, body).pipe(
      catchError((error: unknown) => {
        return throwError(error);
      }),
    );
  }

  /**
   * POST REQUEST WITH PARAMS
   * @param url
   * @param params
   * @param body
   * @returns
   */
  postDataWithParams<T>(
    url: string,
    params: Record<string, string>,
    body: Record<string, unknown> = {},
  ): Observable<T> {
    return this.http.post<T>(url, body, { params }).pipe(
      catchError((error: unknown) => {
        return throwError(error);
      }),
    );
  }

  /**
   * UPDATE REQUEST
   * @param url
   * @param body
   * @returns
   */
  putData<T>(url: string, body: Record<string, unknown> = {}): Observable<T> {
    return this.http.put<T>(`${url}`, body).pipe(
      catchError((error: unknown) => {
        return throwError(error);
      }),
    );
  }

  /**
   * PATCH REQUEST
   * @param endPoint
   * @param body
   * @returns
   */
  patchData<T>(endPoint: string, body: Record<string, unknown> = {}): Observable<T> {
    return this.http.patch<T>(`${endPoint}`, body).pipe(
      catchError((error: unknown) => {
        return throwError(error);
      }),
    );
  }

  /**
   * DELETE REQUEST
   * @param url
   * @returns
   */
  deleteData<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${url}`).pipe(
      catchError((error: unknown) => {
        return throwError(error);
      }),
    );
  }
}
