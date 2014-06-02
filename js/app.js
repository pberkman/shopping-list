$(document).ready(function() {
	/*adding items*/
	$("#addButton").on("click", function(){
		var added = $("#newItem").val();
		$("ul").append('<li class="indItem">' + added + '<span class="remove"></span><span class="edit"></span></li>');			
	});
	/*using then enter key to add item to the list*/
	$("#newItem").keypress(function(event){
		if (event.which == 13 ) {
    	  event.preventDefault();
    	  var added = $("#newItem").val();
		  $("ul").append('<li class="indItem">' + added + '<span class="remove"></span><span class="edit"></span></li>');
		}
	})

	/*making the edit and remove buttons appear */
	$(".indItem").mouseenter(function() {
	  $(this).find(".remove").show();
	  $(this).find(".edit").show();
	})
	$(".indItem").mouseleave(function() {
		$(this).find(".remove").hide();
		$(this).find(".edit").hide();
	})
	/*select the remove button to take item off list*/
	$(".remove").on("click", function(){
		var remove=$(this).closest(".indItem");
		$(remove).remove();
	})
	/*click on item to check off*/
	$(".indItem").on("click", function(){
		$(this).addClass("crossedOff");
	})
});
