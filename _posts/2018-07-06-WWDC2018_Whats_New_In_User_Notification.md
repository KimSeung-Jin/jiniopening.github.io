---
layout: post
title:  "[WWDC2018] What's New in User Notifications"
date:   2018-07-06 11:44:30 +0800
categories: [Swift]
excerpt: S710 What's New in User Notifications
tags:
  - User Notifications
  - Swift
  - WWDC 2018
---

간단 요약
### iOS 12 부터 Notification 의 그룹화 지원

* 유저는 알림설정 또는 앱 설정에서 앱 별 그룹화 설정 가능


Automatic|오토매틱
----------|------
By App|앱으로 그룹핑
Off|iOS 11 이하 버전과 동일

* Automatic
	1. 상세한 그룹핑이 가능
	2. Thread identifier 로 메시지 별 그룹핑이 가능
	3. Push 발송 : 메시지 데이터에 identifier 를 추가
	4. Push 수신 : identifier 를 Xcode info.plist 에 미리 설정

* 활용
	1. Push 메시지 별 그룹화를 지원
	2. 이벤트
	3. 채팅
	4. 배송관리 등

### Notification Content Extension
* Push 하단에 custom context 를 추가할 수 있음.

* identifier 를 Xcode info.plist 에 미리 설정
![info.plist image](https://swift-man.github.io/assets/images/wwdc2018_Whats_New_in_User_Notifications.png)

* List - Detail 구조

* Detail Push 메시지 하단에 액션 버튼을 추가 할 수 있음.(UNNotificationAction)
* response.indentifier 로 구분, 하단에 Like, Comment 버튼(예시)을 추가 가능
* 배열형태로 추가한다.
