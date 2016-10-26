$(document).ready(function()
{
	$("#addCategory").click(addACategory);
	$(".addActivity").click(addAnActivity);
	$(".activity").click(changedActivity);
});

function addACategory(event)
{
		alert("This will let you add an category!");
}   
	
function addAnActivity(event)
{
		alert("This will let you add a activity!");
} 

function changedActivity(event)
{
	 var whoCalledMe=$(this).text();
	 console.log("Who called me is '",whoCalledMe,"'");
	 $("#main .text").text(whoCalledMe); 
}