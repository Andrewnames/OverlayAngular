import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartupScreenComponent } from './StartupScreen/startup-screen/startup-screen.component';
import { ModalityScreenComponent } from './modality-screen/modality-screen.component';



const routes: Routes = [
  { path: '', redirectTo: 'startup-screen', pathMatch: 'full' },
  { path: 'startup-screen', component: StartupScreenComponent  },
  { path: 'modality-worklist', component: ModalityScreenComponent },
  // {path: '**', component: PageNotFoundComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
