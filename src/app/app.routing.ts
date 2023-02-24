import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalAppModulePackage } from './views/internal-app/internal-app.module';
import { LegalComponent } from './views/legal/legal.component';
import { SecurityModulePackage } from './views/security/security.module';
import { UXComponent } from './views/UX/UX.component';

const routes: Routes = [
  
  ...SecurityModulePackage.routes,
  ...InternalAppModulePackage.routes,

  { path: 'legal/:module', component: LegalComponent },
  { path: 'ux', component: UXComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
