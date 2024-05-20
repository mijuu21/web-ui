$(function () {
  // 대상을 변수에 저장
  const tabMenu = $('.tab-menu > li');
  const tabContent = $('.tab-con-item');

  // 초기 세팅
  tabAction(0);

  // 공통의 동작을 함수로 정의
  function tabAction(index) {
    // 메서드 체인
    tabMenu.removeClass('on').eq(index).addClass('on');
    tabContent.hide().eq(index).show();
  }
});
