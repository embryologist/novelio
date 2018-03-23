import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  {
    path: "sign",
    component: AuthComponent,
    children: [
      {
        path: "in",
        component: AuthComponent
      },
      {
        path: "up",
        component: AuthComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
