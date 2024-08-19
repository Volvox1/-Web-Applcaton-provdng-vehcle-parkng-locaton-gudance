import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarInfos } from '../models/CarInfos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
path='https://localhost:7175/api'
constructor(private http:HttpClient) { }

GetAllCarInfoss():Observable<any>{
return this.http.get<any[]>(this.path+'/CarInfoss');
}
addcarinfo(AddCarInfo:CarInfos):Observable<CarInfos>{
  
return this.http.post<CarInfos>(this.path+'/CarInfoss',AddCarInfo);
}

getcarinfo(carId:string):Observable<CarInfos>{
  return this.http.get<CarInfos>(this.path+'/CarInfoss/'+carId)
}

updatecarinfo(carId:number,UpdatecarRequest:CarInfos):Observable<CarInfos>{
  return  this.http.put<CarInfos>(this.path+'/CarInfoss/'+carId,UpdatecarRequest)
}
deletecarinfo(carId:number):Observable<CarInfos>{
return this.http.delete<CarInfos>(this.path+'/CarInfoss/'+carId)
}
}
