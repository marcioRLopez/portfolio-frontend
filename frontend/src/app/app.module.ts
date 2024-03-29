import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { CursosRealizadosComponent } from './components/cursos-realizados/cursos-realizados.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { IndexComponent } from './components/index/index.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { BannerModalComponent } from './modales/banner-modal/banner-modal.component';
import { AcercaDeModalComponent } from './modales/acerca-de-modal/acerca-de-modal.component';
import { CursosRealizadosModalComponent } from './modales/cursos-realizados-modal/cursos-realizados-modal.component';
import { EducacionModalComponent } from './modales/educacion-modal/educacion-modal.component';
import { ExperienciaLaboralModalComponent } from './modales/experiencia-laboral-modal/experiencia-laboral-modal.component';
import { HardSoftSkillsModalComponent } from './modales/hard-soft-skills-modal/hard-soft-skills-modal.component';
import { ProyectosModalComponent } from './modales/proyectos-modal/proyectos-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AcercaDeComponent,
    BannerComponent,
    HardSoftSkillsComponent,
    EducacionComponent,
    ExperienciaLaboralComponent,
    CursosRealizadosComponent,
    ProyectosComponent,
    IndexComponent,
    Pagina404Component,
    BannerModalComponent,
    AcercaDeModalComponent,
    CursosRealizadosModalComponent,
    EducacionModalComponent,
    ExperienciaLaboralModalComponent,
    HardSoftSkillsModalComponent,
    ProyectosModalComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
