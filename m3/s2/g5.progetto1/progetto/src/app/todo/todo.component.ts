import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { iTodos } from '../Models/itodos';
import { Todos } from '../Models/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
todos: any;



constructor(private todosService: TodosService) { }


  newTodo:Partial<Todos>= {
    completed: "0"
  }

  loading:boolean=false;

save(){
  this.loading=true
  this.newTodo.completed= Boolean(Number(this.newTodo.completed))
  this.todosService.create(this.newTodo).then(res=>{this.loading=false;});
  this.todosService.getByCompleted(false).then(todos => this.todos = todos)



}
ngOnInit(){
  this.todosService.getByCompleted(false).then(todos => this.todos = todos)
}



}



