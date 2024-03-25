import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';
import { KosarService } from 'src/app/services/kosar.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-rendeles',
  templateUrl: './rendeles.component.html',
  styleUrls: ['./rendeles.component.css']
})
export class RendelesComponent {

  tetelek:any;
  megrendeles:any={};
  novenyek:any;

  constructor(private  base:BaseService,private kosar:KosarService, private router:Router){
    this.kosar.getTetel().subscribe(
      a=>this.tetelek=a
    )

    this.base.getNovenyek().snapshotChanges().pipe(
      map(ch => ch.map((c)=>({key:c.payload.key, ...c.payload.val()}))
    )).subscribe(
      (adatok)=>this.novenyek=adatok
    )
  }
delete(tetel:any){
  this.kosar.deleteTetel(tetel)
}

megrendel(){
  if (this.tetelek && this.tetelek.length>0)
  {
    this.megrendeles.statusz=false;
    this.megrendeles.datum=(new Date()).toLocaleString();
    this.megrendeles.rendeles=this.tetelek;
    // console.log(this.megrendeles);
    this.base.addMegrendelesek(this.megrendeles).then(
      ()=>{
        this.kosar.deleteAllTetelek();
        this.router.navigate(['/novenyek'])}
    )
  }

}

keres(key:string):number{
  
  return this.novenyek.findIndex((noveny:any)=> noveny.key==key)
  
}

fizetendo(){
  let osszesen=0;
  for (let i = 0; i < this.tetelek.length; i++) {
    osszesen+= this.tetelek[i].db*
    this.novenyek[this.keres(this.tetelek[i].novenyKey)].ar;    
  }
  return osszesen;
}
}

