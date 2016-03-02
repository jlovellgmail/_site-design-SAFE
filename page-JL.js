jQuery(document).ready(function($) {



	function JL_resizer(){
		if( $("#slide img").height() <  $('#slide').height() ) {
			$("#slide img").load(function(){
				var margin = ($('#slide').height() - $("#slide img").height())/2;
				$('#slide img').css('margin-top', margin);
			});
			var margin = ($('#slide').height() - $("#slide img").height())/2;
			$('#slide img').css('margin-top', margin);
		}
	}




	$(".image-wrap img").each(function(){
		// JL
		$(this).parents('a').attr('data-order', $(this).parents('a').index());
	});
	$(".image-wrap").click(function(e){
		e.preventDefault();
		var src= $(this).data('image');
		var num= $(this).index();
		$("#slide").hide();
		$("#slide").html("<img src='"+src+"'/>");
		$("#slide").data('slide',num);
		$("#slide").data('height',$(this).data('height'));
		$("#slide").data('width',$(this).data('width'));
		$("#caption").html($(this).data('caption'));
		$('#slideshow').show();
		$("#slide img").load(function(){
			$("#slide").show();
			JL_resizer();
		});
	});
	var current = 0;
	var next = 0;
	var prev = 0;
	function JL_do_previous(){
		current = $('#slide').data('slide');
		total = $('.image-wrap').length -1;
		prev = current-1;
		if (current == 0){
			prev = total;
		}
		src = $('.image-wrap').eq(prev).data('image');
		caption = $('.image-wrap').eq(prev).data('caption');
		width = $('.image-wrap').eq(prev).data('width');
		height = $('.image-wrap').eq(prev).data('height');
		$("#slide").hide();
		$("#slide").html("<img src='"+src+"'/>");
		$("#caption").html(caption);
		$("#slide").data('slide',prev);
		$("#slide").data('height',height);
		$("#slide").data('width',width);
		$("#slide img").load(function(){
			$("#slide").show();
			JL_resizer();
		});
	}
	function JL_do_next(){
		current = $('#slide').data('slide');
		total = $('.image-wrap').length -1;
		next = 0;
		if (current < total){
			next = current+1;
		}
		src = $('.image-wrap').eq(next).data('image');
		caption = $('.image-wrap').eq(next).data('caption');
		width = $('.image-wrap').eq(next).data('width');
		height = $('.image-wrap').eq(next).data('height');
		$("#slide").hide();
		$("#slide").html("<img src='"+src+"'/>");
		$("#caption").html(caption);
		$("#slide").data('slide',next);
		$("#slide").data('height',height);
		$("#slide").data('width',width);
		$("#slide img").load(function(){
			$("#slide").show();
			JL_resizer();
		});
	}
	document.getElementsByTagName('body')[0].onkeyup = function(e) { 
		var ev = e || event;
		if($("#slideshow").is(":visible")) {
			// left arrow
			if(ev.keyCode == 37) {
				JL_do_previous();
			}
			// right arrow
			if(ev.keyCode == 39) {
				JL_do_next();
			}
			// escape key
			if(ev.keyCode == 27) {
				$("#slideshow").hide();
			}
		}
	}
	$("#next").click(function(e){
		e.preventDefault();
		JL_do_next();
	});
	$("#previous").click(function(e){
		e.preventDefault();
		JL_do_previous();
	});
	$("#close").click(function(){
		$("#slideshow").hide();
	});

	$("#slide").css("user-select", "none");
	$("#slide").css("cursor", "pointer");
	$("#slide").click(function(e){
		e.preventDefault();
		JL_do_next();
	});


});
