---
layout: post
title:  "[Git] 원격저장소 코드 로컬에 땡겨오기"
date:   2018-07-06 18:33:30 +0800
categories: [Git]
excerpt: 로컬에 가져오기
tags:
  - Git
  - git fetch
  - git 브랜치 가져오기
  - git 브랜치 땡기기
---

Git 브랜치 땡겨오기

```
git fetch origin develop
```

```
git merge FETCH_HEAD 
```
* 헤드로 넘어간다.

```
git push origin HEAD
```



### 출처:

---

[1. 누구나 쉽게 이해할 수 있는 Git 입문](https://backlog.com/git-tutorial/kr/stepup/stepup3_2.html)

