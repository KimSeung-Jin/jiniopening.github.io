/* 
* Scroll to the top
*/

$(window).bind("scroll",display);
function display () {
    if($(document).scrollTop()>300) {
        //$("#top").show();
		$("#top").fadeIn(300);
    }else {
        //$("#top").hide();
		$("#top").fadeOut(300);
    }
}

/* 
* Tab of posts
*/
$(document).ready(function () {
	var tabContainer = $(".posts-tabs");
	if (tabContainer.length) {
		$(".tab-two").bind("click", showTabTwo);
		$(".tab-one").bind("click", showTabOne);
		$(".tab-three").bind("click", showTabThree);
		$(".tab-four").bind("click", showTabFour);
		$(".tab-five").bind("click", showTabFive);
		$(".tab-six").bind("click", showTabSix);
		$(".tab-seven").bind("click", showTabSeven);
		$(".tab-eight").bind("click", showTabEight);
		$(".tab-nine").bind("click", showTabNine);
	}
	
	function showTabOne () {
		$(".tab-one").addClass("active");
		$(".tab-two").removeClass("active");
		$(".tab-three").removeClass("active");
		$(".tab-four").removeClass("active");
		$(".tab-five").removeClass("active");
		$(".tab-six").removeClass("active");
		$(".tab-seven").removeClass("active");
		$(".tab-eight").removeClass("active");
		$(".tab-nine").removeClass("active");
		$(".tab-two-list").addClass("tab-hidden");
		$(".tab-three-list").addClass("tab-hidden");
		$(".tab-four-list").addClass("tab-hidden");
		$(".tab-five-list").addClass("tab-hidden");
		$(".tab-six-list").addClass("tab-hidden");
		$(".tab-seven-list").addClass("tab-hidden");
		$(".tab-eight-list").addClass("tab-hidden");
		$(".tab-nine-list").addClass("tab-hidden");
		$(".tab-one-list").removeClass("tab-hidden");
		$(".page-holder-two").addClass("tab-hidden");
		$(".page-holder-three").addClass("tab-hidden");
		$(".page-holder-four").addClass("tab-hidden");
		$(".page-holder-five").addClass("tab-hidden");
		$(".page-holder-six").addClass("tab-hidden");
		$(".page-holder-seven").addClass("tab-hidden");
		$(".page-holder-eight").addClass("tab-hidden");
		$(".page-holder-nine").addClass("tab-hidden");
		$(".page-holder-one").removeClass("tab-hidden");
	}
	function showTabTwo () {
		$(".tab-two").addClass("active");
		$(".tab-one").removeClass("active");
		$(".tab-three").removeClass("active");
		$(".tab-four").removeClass("active");
		$(".tab-five").removeClass("active");
		$(".tab-six").removeClass("active");
		$(".tab-seven").removeClass("active");
		$(".tab-eight").removeClass("active");
		$(".tab-nine").removeClass("active");
		$(".tab-one-list").addClass("tab-hidden");
		$(".tab-three-list").addClass("tab-hidden");
		$(".tab-four-list").addClass("tab-hidden");
		$(".tab-five-list").addClass("tab-hidden");
		$(".tab-six-list").addClass("tab-hidden");
		$(".tab-seven-list").addClass("tab-hidden");
		$(".tab-eight-list").addClass("tab-hidden");
		$(".tab-nine-list").addClass("tab-hidden");
		$(".tab-two-list").removeClass("tab-hidden");
		$(".page-holder-one").addClass("tab-hidden");
		$(".page-holder-three").addClass("tab-hidden");
		$(".page-holder-four").addClass("tab-hidden");
		$(".page-holder-five").addClass("tab-hidden");
		$(".page-holder-six").addClass("tab-hidden");
		$(".page-holder-seven").addClass("tab-hidden");
		$(".page-holder-eight").addClass("tab-hidden");
		$(".page-holder-nine").addClass("tab-hidden");
		$(".page-holder-two").removeClass("tab-hidden");
	}
	function showTabThree () {
		$(".tab-three").addClass("active");
		$(".tab-one").removeClass("active");
		$(".tab-two").removeClass("active");
		$(".tab-four").removeClass("active");
		$(".tab-five").removeClass("active");
		$(".tab-six").removeClass("active");
		$(".tab-seven").removeClass("active");
		$(".tab-eight").removeClass("active");
		$(".tab-nine").removeClass("active");
		$(".tab-two-list").addClass("tab-hidden");
		$(".tab-one-list").addClass("tab-hidden");
		$(".tab-four-list").addClass("tab-hidden");
		$(".tab-five-list").addClass("tab-hidden");
		$(".tab-six-list").addClass("tab-hidden");
		$(".tab-seven-list").addClass("tab-hidden");
		$(".tab-eight-list").addClass("tab-hidden");
		$(".tab-nine-list").addClass("tab-hidden");
		$(".tab-three-list").removeClass("tab-hidden");
		$(".page-holder-two").addClass("tab-hidden");
		$(".page-holder-one").addClass("tab-hidden");
		$(".page-holder-four").addClass("tab-hidden");
		$(".page-holder-five").addClass("tab-hidden");
		$(".page-holder-six").addClass("tab-hidden");
		$(".page-holder-seven").addClass("tab-hidden");
		$(".page-holder-eight").addClass("tab-hidden");
		$(".page-holder-nine").addClass("tab-hidden");
		$(".page-holder-three").removeClass("tab-hidden");
	}
	function showTabFour () {
		$(".tab-four").addClass("active");
		$(".tab-two").removeClass("active");
		$(".tab-three").removeClass("active");
		$(".tab-one").removeClass("active");
		$(".tab-five").removeClass("active");
		$(".tab-six").removeClass("active");
		$(".tab-seven").removeClass("active");
		$(".tab-eight").removeClass("active");
		$(".tab-nine").removeClass("active");
		$(".tab-two-list").addClass("tab-hidden");
		$(".tab-three-list").addClass("tab-hidden");
		$(".tab-one-list").addClass("tab-hidden");
		$(".tab-five-list").addClass("tab-hidden");
		$(".tab-six-list").addClass("tab-hidden");
		$(".tab-seven-list").addClass("tab-hidden");
		$(".tab-eight-list").addClass("tab-hidden");
		$(".tab-nine-list").addClass("tab-hidden");
		$(".tab-four-list").removeClass("tab-hidden");
		$(".page-holder-two").addClass("tab-hidden");
		$(".page-holder-three").addClass("tab-hidden");
		$(".page-holder-one").addClass("tab-hidden");
		$(".page-holder-five").addClass("tab-hidden");
		$(".page-holder-six").addClass("tab-hidden");
		$(".page-holder-seven").addClass("tab-hidden");
		$(".page-holder-eight").addClass("tab-hidden");
		$(".page-holder-nine").addClass("tab-hidden");
		$(".page-holder-four").removeClass("tab-hidden");
	}
	function showTabFive () {
		$(".tab-five").addClass("active");
		$(".tab-two").removeClass("active");
		$(".tab-three").removeClass("active");
		$(".tab-four").removeClass("active");
		$(".tab-one").removeClass("active");
		$(".tab-six").removeClass("active");
		$(".tab-seven").removeClass("active");
		$(".tab-eight").removeClass("active");
		$(".tab-nine").removeClass("active");
		$(".tab-two-list").addClass("tab-hidden");
		$(".tab-three-list").addClass("tab-hidden");
		$(".tab-four-list").addClass("tab-hidden");
		$(".tab-one-list").addClass("tab-hidden");
		$(".tab-six-list").addClass("tab-hidden");
		$(".tab-seven-list").addClass("tab-hidden");
		$(".tab-eight-list").addClass("tab-hidden");
		$(".tab-nine-list").addClass("tab-hidden");
		$(".tab-five-list").removeClass("tab-hidden");
		$(".page-holder-two").addClass("tab-hidden");
		$(".page-holder-three").addClass("tab-hidden");
		$(".page-holder-four").addClass("tab-hidden");
		$(".page-holder-one").addClass("tab-hidden");
		$(".page-holder-six").addClass("tab-hidden");
		$(".page-holder-seven").addClass("tab-hidden");
		$(".page-holder-eight").addClass("tab-hidden");
		$(".page-holder-nine").addClass("tab-hidden");
		$(".page-holder-five").removeClass("tab-hidden");
	}
	function showTabSix () {
		$(".tab-six").addClass("active");
		$(".tab-two").removeClass("active");
		$(".tab-three").removeClass("active");
		$(".tab-four").removeClass("active");
		$(".tab-five").removeClass("active");
		$(".tab-one").removeClass("active");
		$(".tab-seven").removeClass("active");
		$(".tab-eight").removeClass("active");
		$(".tab-nine").removeClass("active");
		$(".tab-ten").removeClass("active");
		$(".tab-two-list").addClass("tab-hidden");
		$(".tab-three-list").addClass("tab-hidden");
		$(".tab-four-list").addClass("tab-hidden");
		$(".tab-five-list").addClass("tab-hidden");
		$(".tab-one-list").addClass("tab-hidden");
		$(".tab-seven-list").addClass("tab-hidden");
		$(".tab-eight-list").addClass("tab-hidden");
		$(".tab-nine-list").addClass("tab-hidden");
		$(".tab-ten-list").addClass("tab-hidden");
		$(".tab-six-list").removeClass("tab-hidden");
		$(".page-holder-two").addClass("tab-hidden");
		$(".page-holder-three").addClass("tab-hidden");
		$(".page-holder-four").addClass("tab-hidden");
		$(".page-holder-five").addClass("tab-hidden");
		$(".page-holder-one").addClass("tab-hidden");
		$(".page-holder-seven").addClass("tab-hidden");
		$(".page-holder-eight").addClass("tab-hidden");
		$(".page-holder-nine").addClass("tab-hidden");
		$(".page-holder-ten").addClass("tab-hidden");
		$(".page-holder-six").removeClass("tab-hidden");
	}
	function showTabSeven () {
		$(".tab-seven").addClass("active");
		$(".tab-two").removeClass("active");
		$(".tab-three").removeClass("active");
		$(".tab-four").removeClass("active");
		$(".tab-five").removeClass("active");
		$(".tab-six").removeClass("active");
		$(".tab-one").removeClass("active");
		$(".tab-eight").removeClass("active");
		$(".tab-nine").removeClass("active");
		$(".tab-two-list").addClass("tab-hidden");
		$(".tab-three-list").addClass("tab-hidden");
		$(".tab-four-list").addClass("tab-hidden");
		$(".tab-five-list").addClass("tab-hidden");
		$(".tab-six-list").addClass("tab-hidden");
		$(".tab-one-list").addClass("tab-hidden");
		$(".tab-eight-list").addClass("tab-hidden");
		$(".tab-nine-list").addClass("tab-hidden");
		$(".tab-seven-list").removeClass("tab-hidden");
		$(".page-holder-two").addClass("tab-hidden");
		$(".page-holder-three").addClass("tab-hidden");
		$(".page-holder-four").addClass("tab-hidden");
		$(".page-holder-five").addClass("tab-hidden");
		$(".page-holder-six").addClass("tab-hidden");
		$(".page-holder-one").addClass("tab-hidden");
		$(".page-holder-eight").addClass("tab-hidden");
		$(".page-holder-nine").addClass("tab-hidden");
		$(".page-holder-seven").removeClass("tab-hidden");
	}
	function showTabEight () {
		$(".tab-eight").addClass("active");
		$(".tab-two").removeClass("active");
		$(".tab-three").removeClass("active");
		$(".tab-four").removeClass("active");
		$(".tab-five").removeClass("active");
		$(".tab-six").removeClass("active");
		$(".tab-seven").removeClass("active");
		$(".tab-one").removeClass("active");
		$(".tab-nine").removeClass("active");
		$(".tab-two-list").addClass("tab-hidden");
		$(".tab-three-list").addClass("tab-hidden");
		$(".tab-four-list").addClass("tab-hidden");
		$(".tab-five-list").addClass("tab-hidden");
		$(".tab-six-list").addClass("tab-hidden");
		$(".tab-seven-list").addClass("tab-hidden");
		$(".tab-one-list").addClass("tab-hidden");
		$(".tab-nine-list").addClass("tab-hidden");
		$(".tab-eight-list").removeClass("tab-hidden");
		$(".page-holder-two").addClass("tab-hidden");
		$(".page-holder-three").addClass("tab-hidden");
		$(".page-holder-four").addClass("tab-hidden");
		$(".page-holder-five").addClass("tab-hidden");
		$(".page-holder-six").addClass("tab-hidden");
		$(".page-holder-seven").addClass("tab-hidden");
		$(".page-holder-one").addClass("tab-hidden");
		$(".page-holder-nine").addClass("tab-hidden");
		$(".page-holder-eight").removeClass("tab-hidden");
	}
	function showTabNine () {
		$(".tab-nine").addClass("active");
		$(".tab-two").removeClass("active");
		$(".tab-three").removeClass("active");
		$(".tab-four").removeClass("active");
		$(".tab-five").removeClass("active");
		$(".tab-six").removeClass("active");
		$(".tab-seven").removeClass("active");
		$(".tab-eight").removeClass("active");
		$(".tab-one").removeClass("active");
		$(".tab-two-list").addClass("tab-hidden");
		$(".tab-three-list").addClass("tab-hidden");
		$(".tab-four-list").addClass("tab-hidden");
		$(".tab-five-list").addClass("tab-hidden");
		$(".tab-six-list").addClass("tab-hidden");
		$(".tab-seven-list").addClass("tab-hidden");
		$(".tab-eight-list").addClass("tab-hidden");
		$(".tab-one-list").addClass("tab-hidden");
		$(".tab-nine-list").removeClass("tab-hidden");
		$(".page-holder-two").addClass("tab-hidden");
		$(".page-holder-three").addClass("tab-hidden");
		$(".page-holder-four").addClass("tab-hidden");
		$(".page-holder-five").addClass("tab-hidden");
		$(".page-holder-six").addClass("tab-hidden");
		$(".page-holder-seven").addClass("tab-hidden");
		$(".page-holder-eight").addClass("tab-hidden");
		$(".page-holder-one").addClass("tab-hidden");
		$(".page-holder-nine").removeClass("tab-hidden");
	}
})

/*
 * Pagination
 */
$(function(){
  /* initiate the plugin */
  $("div.page-holder-one").jPages({
      containerID  : "pag-itemContainer-one",
      previous: "«",
      next: "»",
      perPage      : 5,  /* num of items per page */
      startPage    : 1,
      startRange   : 1,
      midRange     : 4,
      endRange     : 1,
      direction    : "auto"
  });
  $("div.page-holder-two").jPages({
      containerID  : "pag-itemContainer-two",
      previous: "«",
      next: "»",
      perPage      : 5,  /* num of items per page */
      startPage    : 1,
      startRange   : 1,
      midRange     : 4,
      endRange     : 1,
      direction    : "auto"
  });
	$("div.page-holder-three").jPages({
      containerID  : "pag-itemContainer-three",
      previous: "«",
      next: "»",
      perPage      : 5,  /* num of items per page */
      startPage    : 1,
      startRange   : 1,
      midRange     : 4,
      endRange     : 1,
      direction    : "auto"
  });
	$("div.page-holder-four").jPages({
      containerID  : "pag-itemContainer-four",
      previous: "«",
      next: "»",
      perPage      : 5,  /* num of items per page */
      startPage    : 1,
      startRange   : 1,
      midRange     : 4,
      endRange     : 1,
      direction    : "auto"
  });
	$("div.page-holder-five").jPages({
      containerID  : "pag-itemContainer-five",
      previous: "«",
      next: "»",
      perPage      : 5,  /* num of items per page */
      startPage    : 1,
      startRange   : 1,
      midRange     : 4,
      endRange     : 1,
      direction    : "auto"
  });
	$("div.page-holder-six").jPages({
      containerID  : "pag-itemContainer-six",
      previous: "«",
      next: "»",
      perPage      : 5,  /* num of items per page */
      startPage    : 1,
      startRange   : 1,
      midRange     : 4,
      endRange     : 1,
      direction    : "auto"
  });
	$("div.page-holder-seven").jPages({
      containerID  : "pag-itemContainer-seven",
      previous: "«",
      next: "»",
      perPage      : 5,  /* num of items per page */
      startPage    : 1,
      startRange   : 1,
      midRange     : 4,
      endRange     : 1,
      direction    : "auto"
  });
	$("div.page-holder-eight").jPages({
      containerID  : "pag-itemContainer-eight",
      previous: "«",
      next: "»",
      perPage      : 5,  /* num of items per page */
      startPage    : 1,
      startRange   : 1,
      midRange     : 4,
      endRange     : 1,
      direction    : "auto"
  });
	$("div.page-holder-nine").jPages({
      containerID  : "pag-itemContainer-nine",
      previous: "«",
      next: "»",
      perPage      : 5,  /* num of items per page */
      startPage    : 1,
      startRange   : 1,
      midRange     : 4,
      endRange     : 1,
      direction    : "auto"
  });
});
