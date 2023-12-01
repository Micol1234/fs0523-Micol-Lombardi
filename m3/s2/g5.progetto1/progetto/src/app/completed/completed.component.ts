import { TodosService } from './../todos.service';
import { iTodos } from '../Models/itodos';
import { Todos } from './../Models/todos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class ListaComponent {

  todos:Todos[] = [];

  constructor(private TodosService:TodosService){}

  ngOnInit(){
    this.TodosService.getAll().then(todos => this.todos = todos)
  }

  delete(id:number |undefined){
    if(!id) return

    this.TodosService.delete(id).then(res => {

      this.todos =  this.todos.filter(p => p.id != id);

    })
  }
}
