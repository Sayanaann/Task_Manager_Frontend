import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _ids: number[] = [];

  constructor(private http :HttpClient) { }

  viewtask=(data:any)=>
  {

    return this.http.get(environment.viewTaskUrl+data)
  }
  deletetask=(data:any)=>
  {
    
    
    return this.http.post(environment.deleteTaskUrl,data)
  }
  public getIds(): number[] {
    return this._ids;
  }
  public setIds(value: number) {
    if(this._ids.includes(value)){
      let index = this._ids.indexOf(value)
      if(index > -1){
        this._ids.splice(index,1);
      }
    }else{
      this._ids.push(value);
    }
  }

  public setNonId(){
    this._ids=[]
  }
}
