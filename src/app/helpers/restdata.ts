import {HttpHeaders} from "@angular/common/http";

export class Restdata {

  //local http://localhost:5001
  private url = 'http://localhost:8123/';

  public httpOptionsToken = { 
        headers: new HttpHeaders().set('Authorization', 'Bearer ' +sessionStorage.getItem('token')).set('Content-Type', 'application/json') 
        };
        
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +sessionStorage.getItem('token'),
      'Access-Control-Allow-Origin': 'http://localhost:8123/',
      'Access-Control-Allow-Credentials': 'true'
    })
  };

  public getUrl(keyword: string): string {
    return this.url + keyword + '/';
  }

}
