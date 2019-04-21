import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = interval(3000)
                  .pipe(map((data:number) =>{
                    return data*2;
                  }));
    this.numberObsSubscription= myNumbers.subscribe(
      (number: number)=>{
        console.log(number);
      }
    );
    const myObservable =Observable.create(
      (observer: Observer<string>) =>{
        setTimeout(()=>{
          observer.next('first package');
        }, 2000);
        setTimeout(()=>{
          observer.next('second package');
        }, 4000);
        setTimeout(()=>{
          observer.complete();
        }, 5000);
        setTimeout(()=>{
          observer.next('third package');
        }, 6000);
      });
      this.customObsSubscription=myObservable.subscribe(
        (data:string) =>{
          console.log(data)
        },
        (error:string) =>{
          console.log(error)
        },
        () =>{
          console.log('completed')
        }
      );
  }
  ngOnDestroy(){
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
