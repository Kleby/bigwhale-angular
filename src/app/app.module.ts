import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
//modulos de importações
import { DesignModule } from './pages/design/design.module';
import { SecurityModule } from './pages/security/security.module';
import { DocumentsModule } from './pages/documents/documents.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './pages/home/menu-bar/menu-bar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { DesignComponent } from './pages/design/design.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { SecurityComponent } from './pages/security/security.component';
import { MenuLogoComponent } from './pages/home/menu-logo/menu-logo.component';
import { MenuAboutComponent } from './pages/home/menu-about/menu-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    NotFoundComponent,
    DesignComponent,
    DocumentsComponent,
    SecurityComponent,
    MenuLogoComponent,
    MenuAboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DesignModule,
    SecurityModule,
    DocumentsModule,
    FormsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
