import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

/** Sidenav */
import { MatSidenavModule } from "@angular/material/sidenav";

/** Icon */
import { MatIconModule } from "@angular/material/icon";

/** Toolbar */
import { MatToolbarModule } from "@angular/material/toolbar";

/** Button */
import { MatButtonModule } from "@angular/material/button";

/** Ripple */
import { MatRippleModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  declarations: []
})
export class MaterialModule {}
