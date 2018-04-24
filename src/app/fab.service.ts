import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class FabService {
  fabState$: BehaviorSubject<any> = new BehaviorSubject({
    id: null,
    payload: null
  });
}
