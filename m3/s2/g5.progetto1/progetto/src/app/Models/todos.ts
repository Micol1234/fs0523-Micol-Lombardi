import { iTodos } from "./itodos";

export class Todos implements iTodos {
  static filter(arg0: (task: any) => boolean): any {
    throw new Error('Method not implemented.');
  }

  constructor(   public title: string,
    public completed: boolean|string ,
    public id?: number){}

}
