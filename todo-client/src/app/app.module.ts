import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { ConsoleComponent } from './console/console.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
