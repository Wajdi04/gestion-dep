import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CadreAdminComponent } from './pages/cadre-admin/cadre-admin.component';
import { EnseignantsComponent } from './pages/enseignants/enseignants.component';
import { EtudiantsComponent } from './pages/etudiants/etudiants.component';

const routes: Routes = [

  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: 'etudiants',
      component: EtudiantsComponent,
    },
    {
      path: 'enseignants',
      component: EnseignantsComponent
      },
      {
      path: 'cadre-admin',
      component: CadreAdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
