import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RolunkComponent } from './part/rolunk/rolunk.component';
import { NavComponent } from './part/nav/nav.component';
import { Enviroments } from './enviroments';
import { FilterPipe } from './pipe/filter.pipe';
import { NovenyekComponent } from './part/novenyek/novenyek.component';
import { RendelesComponent } from './part/rendeles/rendeles.component';

@NgModule({
  declarations: [
    AppComponent,
    RolunkComponent,
    NavComponent,
    FilterPipe,
    NovenyekComponent,
    RendelesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(Enviroments.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
