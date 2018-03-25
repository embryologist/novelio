import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { VerifyComponent } from "./auth/verify/verify.component";
import { InterestsComponent } from "./interests/interests.component";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: IndexComponent
  },
  {
    path: "sign",
    children: [
      {
        path: "in",
        component: AuthComponent
      },
      {
        path: "up",
        component: AuthComponent
      },
      {
        path: "username",
        component: VerifyComponent
      },
      {
        path: "interests",
        component: InterestsComponent
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
