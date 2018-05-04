---
layout: post
title:  "git pull 강제로 강제로 받기"
date:   2018-05-04 12:51:30 +0800
categories: [Git]
excerpt: git 를 쓰다 보면, classpath나 project 파일과 같은 이클립스 설정 파일이 자동으로 바뀌어지면서 git pull 명령시 에러가 날 수 있다.
tags:
  - Git
  - git pull error
  - git reset
  - git reset hard
---

### git pull 강제로 강제로 받기：
---

> git 를 쓰다 보면, orgigin master 와 local git 의 매칭이 안될 때가 있다. 이때 pull 명령시 에러가 날 수 있다.

{% highlight html %}
git reset --hard HEAD 
git pull origin master
{% endhighlight %}

![viewport1](https://i.imgur.com/GYCMndp.png)



### 출처:

---

[1. 김용환 블로그(2004-2018)](http://knight76.tistory.com/entry/git-pull-강제로-강제로-받기)

