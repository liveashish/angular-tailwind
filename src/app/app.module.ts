import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditorComponent } from './editor/editor.component';

import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor';

// const monacoConfig: NgxMonacoEditorConfig = {
//   baseUrl: 'app-name/assets', // configure base path cotaining monaco-editor directory after build default: './assets'
//   defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
//   onMonacoLoad: () => { console.log((<any>window).monaco); } // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
// };


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    MonacoEditorModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
