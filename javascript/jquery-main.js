$(document).ready(function(){
    // $(".infoSectionClass").click(function() {
    // 	$(".infoSectionClass").hide();
    // });
	$(".infoSectionClass ul").hide();
    $(".infoSectionClass").hover(function(){
  		$(".infoSectionClass ul").show();
 	}, function() {
     $(".infoSectionClass ul").hide();
 });
});

