$(document).ready(function(){
	$("body>div>div").each(function()
	{
		$(this).append("<div id='reticula'></div>")
		

	})
	$("#reticula").each(function(){

		for(var i=0;i<16;i++)
		{
			if(i==15)
			{
				$(this).append("<div class='ultimo'></div>");
			}
			else
			{
				$(this).append("<div></div>");
			}
		}

	})
	
})