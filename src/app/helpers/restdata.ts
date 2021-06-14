import {HttpHeaders} from "@angular/common/http";

export class Restdata {


  private url = 'http://192.168.178.39:30001/';


  public httpOptionsToken = { 
        headers: new HttpHeaders().set('Authorization', 'Bearer ' +sessionStorage.getItem('token')).set('Content-Type', 'application/json') 
        };
        
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +sessionStorage.getItem('token'),
      'Access-Control-Allow-Origin': 'http://192.168.178.39:30001/',
      'Access-Control-Allow-Credentials': 'true'
    })
  };

  public getUrl(keyword: string): string {
    return this.url + keyword + '/';
  }

}
