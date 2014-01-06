
var sellstatus=0; // if selling=1, not selling=0;
var sellorder=[1,1,1,1,1,0,0,0,0,0,0,0];  // list of ones to sell. order as written in table.

var loopintveral;


function startsell(){
	loopinterval=setInterval(looping,500);
	sellstatus=1;
}

function stopsell(){
	clearInterval(loopinterval);	
	sellstatus=0;
}



function looping(){
	
  //perhaps add a code that opends PLACE1 before clicking the sell buttons.. just in case
	
		for(i=0;i<sellorder.length;i++){	
			if(sellorder[i]==1){
				var j=i+2;
				document.getElementById("SB"+j).onclick();
			
		}	
        }
	
}






shortcut.add("s",function sellwin(){
  

	var testurl="https://rawgithub.com/kwagjj/mrmine-macro/master/initializing/5.1/sellwindow.html";
	$.get(testurl,function(data,status){
	
		var win=window.open("","sell_window","width=300,height=400");
		win.document.write(data);
		win.load();
	});
		
} );


 
