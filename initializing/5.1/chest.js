// do it every five minutes?

var chestlog="";
var chestcount=0;
var intervalobj;


function date_time(){
		var date = new Date();
        
        month = date.getMonth()+1;
		
        
        d = date.getDate();
        
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = ' '+month+'-'+d+' '+h+':'+m+':'+s;
        return result;
		

}



function chestcheck(){
		document.getElementById("DOWNALLB").onclick(); // press downallb
		var arr='abcdefghij';
		var keeploop=1;
		chestcount=0;

		// loop for checking and clicking chests on the 5th line
		while(keeploop==1){


			for(i=0;i<10;i++)
			{
					document.getElementById("L5"+arr[i]).onclick();
					if(document.getElementById("CHESTD").style.visibility=="visible"){
						chestcount++;
					}
					document.getElementById('OPENIT').onclick();
					document.getElementById('OPENIT').onclick();
			} //finished checking the botton line

			document.getElementById("UPB").onclick(); // go one line up
			
			if(document.getElementById("HELPBUTTON").style.visibility=="visible"){
				keeploop=0;
				var text1=date_time()+" -- "+chestcount+" checked\n";
				chestlog+=text1;
			}

		}

		

		// display chestcount somewhere
		
}

function startcheck(){
    intervalobj=setInterval(chestcheck,3000);
}


function stopcheck(){
    clearInterval(intervalobj);
    
}


shortcut.add("c",function chestlog(){
        
        
        if(chestwin!=undefined && !chestwin.closed){ //when opened window exists,
        chestwin.close(); // close the opened window
        chestwin=undefined; // nullify the win variable. give the win variable a fresh start;
        
        }
  

        var testurl="https://rawgithub.com/kwagjj/mrmine-macro/master/initializing/5.1/chestlog.html";
        $.get(testurl,function(data,status){
        
                chestwin=window.open("","chestlog","width=300,height=400");
                chestwin.document.write(data);
                chestwin.load();
        });
                
} );


shortcut.add("a",function (){alert('done');});
