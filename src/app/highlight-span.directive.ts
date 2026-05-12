import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: 'span, [highlight]',
  standalone: true
})
export class HighlightSpanDirective {

  private el = inject(ElementRef).nativeElement;

  ngAfterViewInit() {
    this.el.style.backgroundColor = 'yellow';
  }

}
