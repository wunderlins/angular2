import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { ConsoleComponent } from './console/console.component';
import { NotesService } from './notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
