$(document).ready(function() {
	/*adding items	*/
	$("#addButton").on("click", function(){
		var added = $("#newItem").val();
		$("ul").append('<li <span class="indItem">' + added + '</span><span class="remove" style="display:block;"></span><span class="edit" style="display:none;"></span></li>');			
		$("#newItem").val("");
		})

	/*using then enter key to add item to the list*/
	$("#newItem").keypress(function(event){
		if (event.which == 13 ){
    	  event.preventDefault();
    	  var added = $("#newItem").val();
		  $("ul").append('<li <span class="indItem">' + added + '</span><span class="remove" style="display:none;"></span><span class="edit" style="display:none;"></span></li>');
		  $("#newItem").val("");
		}
	})
	/*clearing input value on focus*/
	$("#newItem").on("click",function(){
		$(this).removeAttr("placeholder");
	})
	
	/*making the edit and remove buttons appear */
	$("li").mouseenter(function() {
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
	/*select the edit button to edit the item*/
	$(".edit").on("click", function(){
		var edit=$(this).closest("indItem").focus();
	})
	/*click on item to check off*/
	$(".indItem").on("click", function(){
		$(this).toggleClass("crossedOff");
	})
});
