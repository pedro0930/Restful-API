import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class HttpService {
    constructor(private _http: HttpClient){
    }

    getTasks(){
      return this._http.get('/tasks');
     }

    displayDetail(id){
      console.log(id)
      return this._http.get('/tasks/' + id);
    }

    addTask(newtask){
      console.log("FIRED IN SERVICE: ", newtask)
      return this._http.post('/tasks', newtask);
    }

    delete(id){
      console.log("FIRED IN SERVICE: ", id)
      return this._http.delete('/tasks/delete/' + id);
    }

    edit(id, newtask){
      console.log("FIRED IN SERVICE: ", id, newtask)
      return this._http.patch('/tasks/' + id, newtask)
    }
}

