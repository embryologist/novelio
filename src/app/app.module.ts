import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { environment } from "../environments/environment";
import { MaterialModule } from "./material/material.module";
import { AuthComponent } from "./auth/auth.component";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import {AngularFirestoreModule} from "angularfire2/firestore";

import { AuthService } from "./auth.service";
import { VerifyComponent } from './auth/verify/verify.component';
import { InterestsComponent } from './interests/interests.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, VerifyComponent, InterestsComponent, IndexComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
