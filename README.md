# 블록체인 기반 이력관리 시스템

### 2019 이브와 ict 멘토링(2019.04~2019.11)

----------

__주제__: 블록체인 기반 이력관리 시스템

__기획 배경__ : 위조, 도용, 개인정보 유출의 위험이 있는 기존 이력서 시스템의 문제점을 보완하기 위해 블록체인을 도입함.

__팀원__: 김나혜[nahye03](https://github.com/nahye03), 김소현[sohyeon98720](https://github.com/sohyeon98720),이지민[Jimin980921](https://github.com/Jimin980921), 한나연[HanNayeoniee](https://github.com/HanNayeoniee)

----------
           
__프로젝트 내용__ :
- __기능__: 
  - __입력기능__ : 이력서 정보 입력(인적사항, 경력, 학력)
  - __전송기능__ : 지원자와 학교, 지원자와 기업 사이에 학력, 경력 전송
  - __인증기능__ : 학교/기업이 지원자가 작성한 학력/경력 위조 여부 인증
  - __관리기능__ : 권한이 있는 사람만 이력서 작성(지원자), 열람(인증하기위함 or 이력서열람) 가능
  
  -> 이력/경력 인증을 요청하고 기다리는 동안 새로운 이력/경력을 작성할 수 없음(웹 기능)                      
  -> 인증을 받은 최소 하나 이상의 학력/경력이 존재해야 지원하고자하는 기업에 이력서를 제출할 수 있음(웹 기능)
<img src="https://user-images.githubusercontent.com/47767202/77847863-22098280-71fb-11ea-96ec-5609d349ff04.png" width="50%">    

  _=> 기존 이력서 시스템의 문제점 개선_
<br>

- __사용프로그램__: 
  - remix: 블록체인 코드 구현
  - webstorm: 블록체인과 웹 연동 및 웹 ui, 데이터베이스 연결, 깃 연동 등 전체적인 부분 담당
  - Robomongo: 데이터베이스
  
<br>

- __결과__:
  - __메인화면__:
  <img src="https://user-images.githubusercontent.com/47767202/79295452-a9e9cf00-7f13-11ea-92ba-781dd9feea24.PNG" width="50%">
  <br>
  - __지원자로 로그인했을 때__:
 <img src="https://user-images.githubusercontent.com/47767202/79295603-06e58500-7f14-11ea-853f-2825c6cc627c.PNG" width="50%">
<img src="https://user-images.githubusercontent.com/47767202/77847898-62690080-71fb-11ea-802a-b56ab4934d07.png" width="50%">
