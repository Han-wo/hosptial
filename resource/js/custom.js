// 스크롤시 header 밑줄 생성
$(window).scroll(function(){
  let scrollValue = $(document).scrollTop();
  if(scrollValue > 0){
    $(".header").addClass('on');
  }else{
    $(".header").removeClass('on');
  }
})