import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Noveny } from '../model/noveny';
import { Megrendeles } from '../model/megrendeles';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  refNovenyek: AngularFireList<Noveny>;
  refMegrendelesek: AngularFireList<Megrendeles>;
  
  constructor(private db:AngularFireDatabase) {
      this.refNovenyek=this.db.list('/nyovenyek')
      this.refMegrendelesek=this.db.list('/megrendelesek')
   }

   getNovenyek(){
    return this.refNovenyek;
   }
   getMegrendelesek(){
    return this.refMegrendelesek;
   }

   addMegrendelesek(body:any){
    return this.refMegrendelesek.push(body);
   }
   updateMegrendelesek(body:any){
    return this.refMegrendelesek.update(body.key, body);
   }

}
