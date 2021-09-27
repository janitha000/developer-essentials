import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators'

@Directive({
  selector: '[appHoldable]'
})
export class HoldableDirective {

  @Output() holdTime = new EventEmitter<number>();

  state = new Subject<string>();
  cancel!: Observable<string>;


  constructor() {
    this.cancel = this.state.pipe(
      filter(v => v === 'cancel'),
      tap(v => {
        console.log('hold stop')
        this.holdTime.emit(0);
      })
    )
  }

  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onExit() {
    this.state.next('cancel')
  }

  @HostListener('mousedown', ['$event'])
  onHold() {
    console.log('started hold');
    this.state.next('start');

    const n = 100;

    interval(100).pipe(
      takeUntil(this.cancel),
      tap(v => {
        this.holdTime.emit(v * n)
      })
    ).subscribe()
  }
}

// <div class="holdable" style="margin-top: 10rem;">
//     <button appHoldable (holdTime)="onHoldEvent($event)">Holdable</button>
// </div>
