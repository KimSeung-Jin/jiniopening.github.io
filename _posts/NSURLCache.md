@여엉차님 NSURLCache는 'Cache-Control' HTTP-Header 가 결정한다는 것 같은데요. HTTP-Header에 설정가능한 케쉬 관련 표준이 있나봐요.

https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Cache-Control

https://developer.apple.com/documentation/foundation/nsurlcachestoragepolicy/nsurlcachestorageallowed?language=objc

캐싱 막기
캐싱을 끄기 위해서, 다음의 디렉티브들을 보낼 수 있습니다. 추가로, Expires와 Pragma 헤더를 참고하시기 바랍니다.

Cache-Control: no-cache, no-store, must-revalidate
정적 에셋 캐싱
변경되지 않을 애플리케이션 내 파일들에 대해, 보통 적극적인 캐싱을 추가할 수 있습니다. 이것은 예를 들자면, 이미지, CSS 파일 그리고 자바스크립트 파일과 같이 애플리케이션에 의해 서브되는 정적 파일들을 포함합니다. 추가로, Expires 헤더를 참고하시기 바랍니다.

Cache-Control:public, max-age=31536000
