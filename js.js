// My dad helped me make this lmao.

function door() {
    var interval = setInterval(doorExpand, 3);

	function doorExpand()
	{
		var element = document.getElementById("doorImage");
        	var size = doorImage.height;
        
		if(size <=2000) {
			element.height = size+10;
        		element.width = size+10;
    		} else {
			clearInterval(interval);
            		window.location.href = 'https://emeraldimpulse7.github.io';		
		}
	}
}

