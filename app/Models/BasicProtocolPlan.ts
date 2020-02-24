import { Guid } from "guid-typescript";
export class BasicProtocolPlan {



  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }



  private _Id : Guid;
  public get Id() : Guid {
    return this._Id;
  }
  public set Id(v : Guid) {
    this._Id = v;
  }



constructor() {

}


}
