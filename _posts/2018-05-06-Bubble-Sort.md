---
layout: post
title:  "[알고리즘] Bubble Sort"
date:   2018-05-06 03:19:30 +0800
categories: [Algo]
excerpt: "performace:O(n^2), space compexity:O(1)"
tags:
  - Alrorithm
  - Sort
  - BubbleSort
---

# Bubble Sort
---

<h3> 특징 </h3>

>정렬 알고리즘을 직접 구현할 일은 거의 없겠지만 각각의 차이와 장단점에 대해 알아둘 필요가 있습니다. 각 알고리즘 마다 장점과 단점이 있고, 모든 경우에 대해 최선의 결과를 내는 알고리즘은 없습니다. 

![viewport1](http://mblogthumb4.phinf.naver.net/MjAxNzAxMTFfNTAg/MDAxNDg0MDg4MjU0MTk0.DSKjf723wuWzYpF1PieOszYBWArZGtKbLsHdybT-ihcg.lCnA_yjgAACkWpSho1g3jNr_P7iZYTP4ozdZ1LpaFicg.JPEG.doek11/12.jpg?type=w800)

>각각의 정렬 알고리즘을 알아가 봅시다. 저의 경우는 하나씩 공부하다 보니 왜 느리고 빠른지 이해가 되었습니다.

>단, 버블정렬은 너무 느리기 때문에 실무에서 잘 쓰이지 않습니다.

>performace : O(n^2)<br />
space compexity : O(1)

---

<h3> 기본 </h3>

>1. 숫자 두개를 비교한 후 바꿀지 말지 정한다.
2. n 번 반복한다.

---

<h4> Code </h4>
{% highlight swift %}
for _ in 0 ..< arr.count - 1 {
    for j in 0 ..< arr.count - 1 {
        if arr[j] > arr[j + 1] {
            arr.swapAt(j, j + 1)
        }
    }
}
{% endhighlight %}

---

<h4> GitHub </h4>
>[바로가기](https://github.com/swift-man/swift/blob/master/Sort/BubbleSort.playground/Contents.swift)


### 출처:

---
