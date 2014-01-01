var loopflag=0;
var sellwinhtml;

var sellorder=[1,1,1,1,1,0,0,0,0,0,0,0];  // list of ones to sell. order as written in table.

var loopintveral;

function looping(){
	
	if(loopflag==0){
		for(i=0;i<sellorder.length;i++){	
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

function stopsell(){
	clearInterval(loopinterval);	
}

function sellwin(){
	var sellurl="https://rawgithub.com/kwagjj/mrmine-macro/master/initializing/sell_window_ver2.html";
	 $(document).get(sellurl,function(data,status){
	 	alert("data received!");
	 	
      sellwinhtml=data;
    });
	
	var win=window.open("","sell_window","width=300,height=400");  
        win.document.write(sellwinhtml);
        win.load();
	
	
}

function test(){
	var testurl="https://rawgithub.com/kwagjj/mrmine-macro/master/initializing/sell_window_ver2.html";
	$.get(testurl,function(data,status){
		function(function(){
			alert('inner callback');}){
		var sellwinhtml=data;}
		
		
		
	});
	
}
