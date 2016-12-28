<p [style.background]="'lime'" [style.color]="'red'">I am green with envy!</p>
设置样式可以用[style.*]的形式，设置样式


个人理解：
 1、如果没有input的话，直接在标签中加入selector中的属性即可 myHighlight 不需要加[]赋值，如果用[]赋值的形式，如：[myHighlight]="color" 则会报错
 2、如果是需要input的话，则需要采用[myHighlight]="color"这中方式赋值 且必须与selector中的值相同，这样<p [myHighlight111]="color">Highlight me!</p> [myHighlight111]="color" 是不可以的。
 3、html中赋值 []="color" 中括号中必须要是指令中的一个input属性
