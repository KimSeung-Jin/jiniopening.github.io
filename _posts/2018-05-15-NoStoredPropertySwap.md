---
layout: post
title:  "[알고리즘] Temp 변수를 사용하지 않고 Swap 하기"
date:   2018-05-15 04:39:30 +0800
categories: [Algo]
excerpt: "Swap"
tags:
  - Swap
  
---


# Temp 변수를 사용하지 않고 Swap 하기
---


{% highlight swift %}

func swap(a: Int, b: Int) {
  var temp = a
  a = b
  b = temp
}
 
{% endhighlight %}

{% highlight swift %}

/*
a = 10
b = 5
*/
func swap(a: Int, b: Int) {
  a = a + b // a = 10 + 5 = 15
  b = a - b // b = 15 - 5 = 10
  a = a - b // a = 15 - 10 = 5
}
 
{% endhighlight %}

마이크로 초보다 더 적지만 연산 시간에 차이가 있을 수 있다.
메모리 공간을 절약할 수 있다.


재밌는 것은
XOR Swap 은 별로라고 한다.

링크
https://en.wikipedia.org/wiki/XOR_swap_algorithm
http://minjang.egloos.com/1241820



