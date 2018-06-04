import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { ConsoleComponent } from './console/console.component';
import { NotesService } from './notes.service';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ConsoleComponent,
    NotesDetailComponent,
    TreeNodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Angular2FontawesomeModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
