import { Component } from '@angular/core';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {

sub: any= Subscription;

  ngOnInit(){
    const Intervallo = new Observable(observe=> {
      let count = 0
      setInterval(()=>{
        observe.next(count)
        if(count === 10){
        observe.complete()
        }

        count++
      },1000)
    })
    this.sub= Intervallo
    .pipe(
      filter(x=>(x as number)>2)
      map(x=> 'Siamo al numero ${x}')
    )
    .subscribe({
      next: res=> console.log(res),
      complete: ()=> console.log('completato')
    })


  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}
