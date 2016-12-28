import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';
@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {
  private _defaultColor = 'red';
  constructor(private el: ElementRef, private renderer: Renderer) { }
  @Input() set defaultColor(colorName: string){
    this._defaultColor = colorName || this._defaultColor;
  }
  @Input('myHighlight') highlightColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this._defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}

/**
import语句指定了从 Angular 的core库导入的一些符号。
Directive提供@Directive装饰器功能。
ElementRef注入到指令构造函数中。 这样代码可以访问 DOM 元素。
Input将数据从绑定表达式传达到指令中。
Renderer 让代码可以改变 DOM 元素的样式。
*/
