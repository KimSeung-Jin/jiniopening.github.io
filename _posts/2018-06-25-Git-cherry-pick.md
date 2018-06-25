---
layout: post
title:  "[Git] cherry-pick"
date:   2018-06-26 01:26:30 +0800
categories: [Git]
excerpt: git cherry-pick
tags:
  - Git
---

다른 브랜치의 일부 커밋만 반영하고 싶을 때

```
# git checkout next-release
# git cherry-pick b14b975
# git log --pretty=oneline
```

http://meetup.toast.com/posts/45
