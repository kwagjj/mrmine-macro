var sellstatus=0; // if selling=1, not selling=0;
var sellorder=[1,1,1,1,1,0,0,0,0,0,0,0];  // list of ones to sell. order as written in table.
var sellwin;
var sellintv;


function startsell(){
	sellintv=setInterval(selling,500);
	sellstatus=1;
}

function stopsell(){
	clearInterval(sellintv);	
	sellstatus=0;
}



function selling(){
	
  //perhaps add a code that opends PLACE1 before clicking the sell buttons.. just in case
	
		for(i=0;i<sellorder.length;i++){	
			if(sellorder[i]==1){
				var j=i+2;
				document.getElementById("SB"+j).onclick();
			
		}	
        }
	
}




shortcut.add("s",function opensellwin(){
        
        
        if(sellwin!=undefined && !sellwin.closed){ //when opened window exists,
        sellwin.close(); // close the opened window
        sellwin=undefined; // nullify the win variable. give the win variable a fresh start;
        
        }
  

        var sellurl="https://rawgithub.com/kwagjj/mrmine-macro/master/initializing/5.1/sellwindow.html";
        $.get(sellurl,function(data,status){
        
                sellwin=window.open("","sell_window","width=300,height=400");
                sellwin.document.write(data);
                sellwin.load();
        });
                
} );


 
