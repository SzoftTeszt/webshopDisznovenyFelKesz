import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { map } from 'rxjs';
import { KosarService } from 'src/app/services/kosar.service';

@Component({
  selector: 'app-novenyek',
  templateUrl: './novenyek.component.html',
  styleUrls: ['./novenyek.component.css']
})
export class NovenyekComponent {
  novenyek:any;
  phrase="";
  constructor(private base:BaseService, private kosar:KosarService){
      this.base.getNovenyek().snapshotChanges().pipe(
        map((ch:any) => ch.map((c:any)=>({key:c.payload.key, ...c.payload.val()}))
      )).subscribe(
        (adatok:any)=>
        {this.novenyek=adatok; 
          // console.log(this.novenyek)
        }
      )
  }
  addTetel(key:string,db:string){
    this.kosar.addTetel({novenyKey:key, db:db})

  }
}
