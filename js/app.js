$(document).ready(function() {

	/*adding items	*/
	
	$("#addButton").on("click", function(){
		var added = $("#newItem").val();
		$("ul").append('<li><span class="indItem">' + added + '</span><span class="remove"></span><span class="edit"></span></li>');
		$("#newItem").val("");
	});

	/*using then enter key to add item to the list*/
	$("#newItem").keypress(function(event){
		if (event.which == 13 ){
			event.preventDefault();
			var added = $("#newItem").val();
			$('<li><span class="indItem">' + added + '</span><span class="remove"></span><span class="edit"></span></li>').appendTo("ul");
			$("#newItem").val("");
		}
	});

	/*clearing input value on focus*/
	$("#newItem").on("click",function(){
		$(this).removeAttr("placeholder");
	});
	
	/*making the edit and remove buttons appear */
	$("ul").on("mouseenter", "li",function() {
		$(this).find(".remove").show();
		$(this).find(".edit").show();
	});
	$("ul").on("mouseleave", "li",function() {
		$(this).find(".remove").hide();
		$(this).find(".edit").hide();
	});

	/*select the remove button to take item off list*/
	$("ul").on("click", ".remove", function(){
		var remove=$(this).closest("li");
		$(remove).remove();
	});

	/*select the edit button to edit the item 
	$(".edit").on("click", function(){
		var edit=$(this).closest("li").;
	});
	*/

	$("ul").on("click","li", function() {
		$("ul").sortable();
	});

	/*click on item to check off*/
	$("ul").on("click", ".indItem",function(){
		$(this).closest(".indItem").toggleClass("crossedOff");
	});
});
