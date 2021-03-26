import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './pages/start/start.component';
import { RatingComponent } from './pages/rating/rating.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { PythonComponent } from './pages/python/python.component';
import { JavaComponent } from './pages/java/java.component';
import { InfoArticleComponent } from './pages/info-article/info-article.component';
import { TopicsComponent } from './pages/topics/topics.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StartComponent,
    RatingComponent,
    WebDevelopmentComponent,
    PythonComponent,
    JavaComponent,
    InfoArticleComponent,
    TopicsComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
