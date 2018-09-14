import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class HttpService {
    constructor(private _http: HttpClient){
    }

    getCakes(){
      return this._http.get('/cake');
     }
    
    uploadCake(newCake){
      return this._http.post('/cake', newCake);
    }
    showCake(id){
      return this._http.get('/cake/' + id);
    }

    comment(newComment){
      console.log("attempting to save comment: ", newComment);
      return this._http.post('/comment', newComment);
    }
}

