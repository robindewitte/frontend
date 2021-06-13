import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Restdata } from "../helpers/restdata";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Util } from "../helpers/util";

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class MotivatieService {

  constructor(private http: HttpClient, private router: Router, private restData: Restdata) { }

  //methods
  private handleError(error: Response) {
    console.error(error);
    return throwError(Util.createErrorMessage(error));
  }

  //send motivatie request to backen
  public motivatie(username: String) {
    return (this.http.post<any>(this.restData.getUrl('api/motivatie/motivatie'), username,
    )).pipe(catchError(this.handleError));
}
