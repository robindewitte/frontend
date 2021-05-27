import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Restdata } from "../helpers/restdata";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Util } from "../helpers/util";
import { PostDTO} from "src/app/helpers/dto/postDTO";


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
export class PostService {

  constructor(private http: HttpClient, private restData: Restdata) { }


  //methods
  private handleError(error: Response) {
    console.error(error);
    return throwError(Util.createErrorMessage(error));
  }

  //posts a message into the database
  public postMessage(postRequest: PostDTO){
    return (this.http.post<any>(this.restData.getUrl('api/post/postmessage'), postRequest,
    )).pipe(catchError(this.handleError));

  }

  //gets all posts of the user on load
  public getUserMessages(username: string){
    return (this.http.get<any>(this.restData.getUrl('api/post/getusermessages/'+username+'')
    )).pipe(catchError(this.handleError));
  }

  //gets all post from search term
  public getMessages(searchterm: string){
    return (this.http.get<any>(this.restData.getUrl('api/post/getmessages/'+searchterm+'')
    )).pipe(catchError(this.handleError));
  }
}
