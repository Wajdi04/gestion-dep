import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { DefaultComponent } from './default.component';
import { EtudiantsComponent } from 'src/app/pages/etudiants/etudiants.component';
import { EnseignantsComponent } from 'src/app/pages/enseignants/enseignants.component';
import { CadreAdminComponent } from 'src/app/pages/cadre-admin/cadre-admin.component';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DefaultComponent,
    EtudiantsComponent,
    EnseignantsComponent,
    CadreAdminComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],

})
export class DefaultModule { }
