 $(function(){
 	$(window).scroll(function(event) {
 		/* Act on the event */
 		if($('body,html').scrollTop()>=300){
 			$('.logo').addClass('chucam');
 			$('.top,.menuright,li,a').addClass('chuden');
 			$('.navbar').addClass('nentrang');
 			$('.nutcomback').addClass('hienra');
 		}
 		else if ($('body,html').scrollTop() < 100){
 			$('.logo').removeClass('chucam');
 			$('.top,.menuright,li,a').removeClass('chuden');
 			$('.navbar').removeClass('nentrang');
 			$('.nutcomback').removeClass('hienra');
 		}



 	});
 
})  
 