import { Injectable, ViewChild } from "@angular/core";

import { QuickActionsComponent } from "./quick-actions/quick-actions.component";
import { MatButton } from "@angular/material";


@Injectable()
export class FabService {
  @ViewChild(QuickActionsComponent) fabContainer: QuickActionsComponent;
  fab: MatButton = this.fabContainer.fab;
}
