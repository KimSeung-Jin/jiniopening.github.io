---
layout: post
title:  "[기초] Selection Sort"
date:   2018-05-07 02:40:30 +0800
categories: [Algo]
excerpt: "performace:O(n^2), space compexity:O(1)"
tags:
  - Alrorithm
  - Sort
  - SelectionSort
---

# Selection Sort
---

<h3> 특징 </h3>


> | i | 비교 횟수  |
|------|-----|
| 1    | n-1 |
| 2    | n-2 |
| 3    | n-3 |

> 총 비교 횟수 
>>(n-1)+(n-2)+...+1 = n(n-1)/2

 

>performace : O(n^2)<br />
space compexity : O(1)

---

<h3> 기본 </h3>

>1. 아직 정렬되지 않은 값을 쭉 훑습니다.
2. 가장 낮은 키 값을 찾습니다.
3. 찾은 값과 정렬된 값 다음 값과 바꿉니다.(벽이 있다고 생각해봅시다.)


<h4> Code </h4>
{% highlight swift %}
for i in 0 ..< arr.count - 1 {
    var indexOfMinValue = i
    for j in i + 1 ..< arr.count {
        if  arr[j] < arr[indexOfMinValue] {
            indexOfMinValue = j
        }
    }
        
    arr.swapAt(i, indexOfMinValue)
}
{% endhighlight %}

---

<h4> GitHub </h4>
[바로가기](https://github.com/swift-man/swift/blob/master/Sort/SelectionSort.playground/Contents.swift)


### 출처:

---
