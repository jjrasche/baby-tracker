import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { GoogleChartsModule } from "angular-google-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import "./extensions/string.extensions";
import "./extensions/array.extensions";
import "./extensions/date.extensions";
import "./extensions/obesrvable.extensions";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule.forRoot(),
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
