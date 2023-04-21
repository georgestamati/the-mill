import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy{
  subscripton$: Subscription;

  tooltipText = 'Buy it today and you will get it tomorrow!';

  dDay = new Date();

  sToMidnight: number;
  mToMidnight: number;
  hToMidnight: number;

  ngOnInit(): void {
    this.subscripton$ = interval(1000)
      .subscribe(x => {
        this.getTimeDifference();
      });
  }

  ngOnDestroy(): void {
    this.subscripton$.unsubscribe();
  }

  private getTimeDifference () {
    this.setToMidnight();
    const timeDifference = this.dDay.getTime() - new Date().getTime();
    this.setTime(timeDifference);
  }

  private setTime (timeDifference: number) {
    this.sToMidnight = Math.floor(timeDifference / 1000 % 60);
    this.mToMidnight = Math.floor(timeDifference / (1000 * 60) % 60);
    this.hToMidnight = Math.floor(timeDifference / (1000 * 60 * 60) % 24);

    if(this.sToMidnight == 0 && this.mToMidnight == 0 && this.hToMidnight == 0){
      this.setToMidnight();
    }
  }

  private setToMidnight(){
    this.dDay.setHours(24, 0, 0, 0);
  }

  countdownToMidnight() {
    const actualDate = new Date();
    const midnightDate = new Date();
    midnightDate.setHours(24, 0, 0, 0);
    const timeDifference = midnightDate.getTime() - actualDate.getTime();
    return timer(timeDifference, 1000);
  }
}
