import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component {
  @Input() testo!:string;
  @Input () className:string = 'btn-primary';

}
