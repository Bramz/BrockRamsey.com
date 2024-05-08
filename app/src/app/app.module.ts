import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent, QuoteComponent, ProjectsComponent] // Specify the root component for bootstrapping
})
export class AppModule { }
