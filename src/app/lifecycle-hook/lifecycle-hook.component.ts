import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.scss']
})
export class LifecycleHookComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() {
    this.log(`contructor... `)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log(`on changes...`)
  }

  ngOnInit(): void {
    this.log(`on init...`)
  }

  ngDoCheck(): void {
    this.log(`do check...`)
  }

  ngAfterContentInit() {
    this.log(`after content init...`)
  }

  ngAfterContentChecked() {
    this.log(`after content checked...`)
  }

  ngAfterViewInit() {
    this.log(`after view init...`)
  }

  ngAfterViewChecked() {
    this.log(`after view checked...`)
  }

  ngOnDestroy() {
    this.log(`on destroy...`)
  }

  log(content: any) {
    console.log(content)
  }
}
