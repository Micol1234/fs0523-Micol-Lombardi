import { Injectable } from '@angular/core';
import { Todos } from './Models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {


  constructor() { }
  apiUrl:string= ' http://localhost:3000/todos';
  getAll():Promise<Todos[]>{
   return fetch(this.apiUrl).then(res=>res.json())
  }
  getById(id:string):Promise<Todos>{
    return fetch(this.apiUrl+ `/${id}`).then(res=>res.json())
   }
   create(todos:Partial<Todos>):Promise<Todos>{
    return fetch(this.apiUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todos)
      }).then(res=>res.json())
   }
   update(todos:Todos):Promise<Todos>{
    return fetch(this.apiUrl + `/update/${todos.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todos)
      }).then(res=>res.json())
   }
   delete(id:number| undefined):Promise<Todos>{
    return fetch(this.apiUrl+ `/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },

      }).then(res=>res.json())
   }
}
