import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
 } from '@angular/core';

@Component({
  selector: 'app-serve-element',
  templateUrl: './serve-element.component.html',
  styleUrls: ['./serve-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServeElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {

    console.log('constructor called');
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('ngDoCheck Called');
  }

  ngOnInit() {
    console.log('ngInit called');
    console.log(this.header.nativeElement.textContent);
    console.log('Text Content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('ngafterContentinit Called');
    console.log('Text Content of paragraph' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log('ngafterContentChecked Called');
  }

  ngAfterViewChecked() {
    console.log('ngafterViewChecked Called');
  }
  ngAfterViewInit() {
    console.log('ngafterViewinit Called');
    console.log(this.header.nativeElement.textContent);
  }
  ngOnDestroy() {
    console.log('onDestroy called');
  }
}
