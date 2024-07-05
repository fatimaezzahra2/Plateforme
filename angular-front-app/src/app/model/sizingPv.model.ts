export class SizingPv{
  id:String;
  mppt:number;
  vm:number;
  pu:number;

  constructor(id:String, mppt:number,vm:number,pu:number) {
    this.id=id;
    this.mppt=mppt;
    this.vm=vm;
    this.pu=pu;
  }

}
