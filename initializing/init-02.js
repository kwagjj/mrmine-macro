var loopflag=0;

var sellorder=[1,1,1,1,1,0,0,0,0,0,0,0];  // list of ones to sell. order as written in table.

var loopintveral;

function looping(){
	
	if(loopflag==0){
		for(i=0;i<order.length;i++){	
			if(sellorder[i]==1){
				var j=i+2;
				document.getElementById("SB"+j).onclick();
			}
		}	
	}
	else{
	}
}

function showmin(){
	var url="https://rawgithub.com/kwagjj/mrmine-macro/master/initializing/mineral_info.html";
	var w=window.open(url,"mineral_info","width=300,height=300");
}



function startsell(){
	loopinterval=setInterval(looping,300);
}
