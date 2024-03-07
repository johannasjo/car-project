import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarCardComponent } from "./car-card/car-card.component";
import { CarListComponent } from "./car-list/car-list.component";
import { CarDetailsComponent } from "./car-details/car-details.component";

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarListComponent,
    CarDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
