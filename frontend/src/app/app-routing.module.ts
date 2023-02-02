import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { CursosRealizadosComponent } from './components/cursos-realizados/cursos-realizados.component';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { BannerModalComponent } from './modales/banner-modal/banner-modal.component';



const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'banner', component: BannerComponent},
  { path: 'acerca-de', component: AcercaDeComponent},
  { path: 'experiencia-laboral', component: ExperienciaLaboralComponent},
  { path: 'educacion', component: EducacionComponent},
  { path: 'cursos-realizados', component: CursosRealizadosComponent},
  { path: 'hard-soft-skills', component: HardSoftSkillsComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'footer', component: FooterComponent},
  { path: '**', component: Pagina404Component},
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
