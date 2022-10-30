

# JS

## querySelector and querySelectorAll vs getElementsByClassName and getElementById in JavaScript

```none
Function               | Live? | Type           | Time Complexity
querySelector          |       | Element        |  O(n)
querySelectorAll       |   N   | NodeList       |  O(n)
getElementById         |       | Element        |  O(1)
getElementsByClassName |   Y   | HTMLCollection |  O(1)
getElementsByTagName   |   Y   | HTMLCollection |  O(1)
getElementsByName      |   Y   | NodeList       |  O(1)
```

1. querySelector* is more flexible, as you can pass it any CSS3 selector, not just simple ones for id, tag, or class.

2. NodeLists and HTMLCollections are both referred to as collections of elements, but HTMLCollections are not as array-like as NodeLists and do not support .forEach(). I find the spread operator useful to work around this:

   `[...document.getElementsByClassName("someClass")].forEach()`

https://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid



## **`Element.classList`**

The **`Element.classList`** is a read-only property that returns a live [`DOMTokenList`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) collection of the `class` attributes of the element. 

A [`DOMTokenList`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) representing the contents of the element's `class` attribute. If the `class` attribute is not set or empty, the `DOMTokenList` with the `length` property equal to `0`.

Although the `classList` property itself is read-only, you can modify its associated `DOMTokenList` using the [`add()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add), [`remove()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove), [`replace()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace), and [`toggle()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) methods.

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

# css

## position

| 值       | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| absolute | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| fixed    | 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| relative | 生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。 |
| static   | 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。 |
| inherit  | 规定应该从父元素继承 position 属性的值。                     |

可以和word文档中的图片位置进行对比想象

## Units

| 单位 | 描述                                                         |
| :--- | :----------------------------------------------------------- |
| em   | 相对于元素的字体大小（font-size）（2em 表示当前字体大小的 2 倍） |
| ex   | 相对于当前字体的 x-height(极少使用)                          |
| ch   | 相对于 "0"（零）的宽度                                       |
| rem  | 相对于根元素的字体大小（font-size）                          |
| vw   | 相对于视口*宽度的 1%                                         |
| vh   | 相对于视口*高度的 1%                                         |
| vmin | 相对于视口*较小尺寸的 1％                                    |
| vmax | 相对于视口*较大尺寸的 1％                                    |
| %    | 相对于父元素                                                 |

## Center anything inside a parent container

1) Make the parent position:relative;

```css
.parent{
    position:relative;
}
```

2. Add these styles to the child

```css
.child{
    position: absolute;  
    top:50%;  
    left:50%;  
    transform:translate(-50%,-50%)
}
```

## z-index

越小越容易被覆盖

# Others

## Map a range of values

https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

```js
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
```

