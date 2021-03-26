import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopicsComponent } from './pages/topics/topics.component';


import { StartComponent } from './pages/start/start.component';
import { RatingComponent } from './pages/rating/rating.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { PythonComponent } from './pages/python/python.component';
import { JavaComponent } from './pages/java/java.component';
import { InfoArticleComponent } from './pages/info-article/info-article.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'topics/:topic', component: TopicsComponent },
  // { path: 'start', component: StartComponent },
  // { path: 'rating', component: RatingComponent }, 
  // { path: 'webDevelopment', component: WebDevelopmentComponent },
  // { path: 'python', component: PythonComponent },
  // { path: 'java', component: JavaComponent },
  { path: 'topics/:topic/:id', component: InfoArticleComponent },
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
