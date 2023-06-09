import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, of, map, scan, tap, from, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {


  A: number = 0
  B: BehaviorSubject<number> = new BehaviorSubject(0)
  c: number[] = [1, 2, 3, 4, 5]
  d: Observable<number> = from(this.c)
  
  e = this.d.pipe(
    map((n) => {
      return n + 1
    })
  ).subscribe((n: number) => console.log("123", n))

  constructor() {
    this.B.pipe(
      map((n) => {
        return n + 1
      })
    ).subscribe((n: number) => console.log("123", n))
    console.log(this.A)
  }
  ngOnInit() {
    this.formf()

  }
  

  addA(): void {
    this.A = this.A + 1
    this.B.next(this.B.getValue() + 1)
  }

  formf(): void {

    of(this.c).subscribe((n) => console.log("1111", n))

  }
  ngOnDestroy(): void {
    this.e.unsubscribe()
  }



  
}
