import {
  trigger,
  state,
  style,
  transition,
  keyframes,
  animate
} from "@angular/animations";

const fabScale = trigger("fabScale", [
  state(
    "tiny",
    style({
      transform: "scale(0, 0)"
    })
  ),
  state(
    "large",
    style({
      transform: "scale(1,1)"
    })
  ),
  transition(
    "tiny <=> large",
    animate(
      "350ms ease-in",
      keyframes([
        style({ transform: "scale(0, 0) ", offset: 0 }),
        style({ transform: "scale(0.5, 0.5) ", offset: 0.3 }),
        style({ transform: "scale(1.3, 1.3) ", offset: 0.6 }),
        style({ transform: "scale(1, 1)", offset: 1 })
      ])
    )
  )
]);

export { fabScale };
