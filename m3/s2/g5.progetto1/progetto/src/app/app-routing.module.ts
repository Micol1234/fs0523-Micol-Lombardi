import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ListaComponent } from './completed/completed.component';


const routes: Routes = [
  { path: '',
  component: TodoComponent },
  { path: 'completed',
  component: ListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
