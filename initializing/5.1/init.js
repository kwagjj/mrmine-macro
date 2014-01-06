var sellstatus=0; // if selling=1, not selling=0;
var sellorder=[1,1,1,1,1,0,0,0,0,0,0,0];  // list of ones to sell. order as written in table.
var win;

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
        
        
        if(win!=undefined && !win.closed){ //when opened window exists,
        win.close(); // close the opened window
        win=undefined; // nullify the win variable. give the win variable a fresh start;
        
        }
  

        var testurl="https://rawgithub.com/kwagjj/mrmine-macro/master/initializing/ver4/sell_window_ver4.html";
        $.get(testurl,function(data,status){
        
                win=window.open("","sell_window","width=300,height=400");
                win.document.write(data);
                win.load();
        });
                
} );


 
