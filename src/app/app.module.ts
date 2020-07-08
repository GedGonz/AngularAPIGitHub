import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriosComponent } from './components/repositorios/repositorios.component';
import { OwnerComponent } from './components/repositorios/owner/owner.component';
import { CardComponent } from './components/repositorios/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { RepositoriosService } from './services/repositorios.service';
import { HttpClientModule } from '@angular/common/http';
import { FindComponent } from './components/repositorios/find/find.component';
import { NotfoundComponent } from './components/repositorios/notfound/notfound.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriosComponent,
    OwnerComponent,
    CardComponent,
    HeaderComponent,
    FindComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [RepositoriosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
