import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { FrameworkPollComponent } from './framework-poll/framework-poll.component';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FrameworkPollComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [FrameworkPollComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const el = createCustomElement(FrameworkPollComponent, { injector: this.injector });
    customElements.define('framework-poll', el);
  }

}
