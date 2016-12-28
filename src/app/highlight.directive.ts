import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';
@Directive({
  selector: '[defaultColor]'
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
/**
 * 个人理解：
 * 1、如果没有input的话，直接在标签中加入selector中的属性即可 myHighlight 不需要加[]赋值，如果用[]赋值的形式，如：[myHighlight]="color" 则会报错
 * 2、如果是需要input的话，则需要采用[myHighlight]="color"这中方式赋值 且必须与selector中的值相同，这样<p [myHighlight111]="color">Highlight me!</p> [myHighlight111]="color" 是不可以的。
 * 3、html中赋值 []="color" 中括号中必须要是指令中的一个input属性
 */