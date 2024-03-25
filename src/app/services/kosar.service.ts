import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KosarService {
  tetelek:any=[];
  constructor() { }

  addTetel(body:any){    
    return this.tetelek.push(body);
 }
 getTetel(){
  return of(this.tetelek);
 }
 deleteAllTetelek(){
  this.tetelek=[];
 }

 deleteTetel(tetel:any){
  this.tetelek.splice(this.keres(tetel.key),1);
 }

 keres(key:string){
  return this.tetelek.findIndex((tetel:any)=> tetel.key==key)
}
}
