import { iTodos } from "./itodos";

export class Todos implements iTodos {
  static completed: boolean;


  constructor(   public title: string,
    public completed: boolean|string ,
    public id?: number){}

}
