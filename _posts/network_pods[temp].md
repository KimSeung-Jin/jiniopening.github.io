def network_pods

  # 대표적인 네트워크 라이브러리입니다.
  pod 'Alamofire'
  # Alamofire를 사용할 때 상단 상태 바에 통신중일때 기본 인디케이터가 나타나도록 합니다.
  pod 'AlamofireNetworkActivityIndicator'
  # Alamofire를 이용할 때 로그를 쉽게 볼 수 있습니다.
  pod 'AlamofireActivityLogger'
end

def core_pods

  # 스넵킷이라는 오토레이아웃을 소스 코드 구현을 용이하게 해주는 라이브러리입니다.
  pod 'SnapKit'
  
  # 유용한 날짜 관련 라이브러리입니다.
  pod 'SwiftDate'
end

target '프로젝트명1' do
  # 스위프트를 사용하지 않고 동적 라이브러리를 이용하지 않는다면 아래 구문을 주석처리 합니다
  use_frameworks!

  # 이렇게 위에 정의된 내용을 사용합니다.
  network_pods
  core_pods
end

target '프로젝트명2' do
  # 스위프트를 사용하지 않고 동적 라이브러리를 이용하지 않는다면 아래 구문을 주석처리 합니다
  use_frameworks!

  # 이렇게 위에 정의된 내용을 사용합니다.
  network_pods
  core_pods
end
