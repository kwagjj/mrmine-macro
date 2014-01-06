// global variables for selling
var sellstatus=0; // if selling=1, not selling=0;
var sellorder=[1,1,1,1,1,0,0,0,0,0,0,0];  // list of ones to sell. order as written in table.
var sellwin;
var sellintv;


// global variables for checkchest
var chestlog="";
var chestcount=0;
var chestintv;
var chestwin;
var checkstatus=0;


// function for selling
function startsell(){
        sellintv=setInterval(selling,1000);
        sellstatus=1;
}

function stopsell(){
        clearInterval(sellintv);        
        sellstatus=0;
}



function selling(){
        
  //perhaps add a code that opends PLACE1 before clicking the sell buttons.. just in case
        document.getElementById("PLACE1").onclick();
                for(i=0;i<sellorder.length;i++){        
                        if(sellorder[i]==1){
                                var j=i+2;
                                document.getElementById("SB"+j).onclick();
                        
                }        
        }
        
        document.getElementById("CLOSEs").onclick();
        
}




shortcut.add("s",function opensellwin(){
        
        
        if(sellwin!=undefined && !sellwin.closed){ //when opened window exists,
        sellwin.close(); // close the opened window
        sellwin=undefined; // nullify the win variable. give the win variable a fresh start;
        
        }
  

        var sellurl="https://rawgithub.com/kwagjj/mrmine-macro/take2/initializing/5.1/sellwindow.html";
        $.get(sellurl,function(data,status){
        
                sellwin=window.open("","sell_window","width=300,height=400");
                sellwin.document.write(data);
                sellwin.load();
        });
                
} );


 // chestcheck related
 
 
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
                                var text1=date_time()+" -- "+chestcount+" looted\n";
                                chestlog+=text1;
                        }

                }
                
}

function startcheck(){

    chestintv=setInterval(chestcheck,10000);
        checkstatus=1;

}


function stopcheck(){
    clearInterval(chestintv);

        checkstatus=0;

    
}

/*
function openchestlog(){
        
        
        
       
        if(chestwin!=undefined && !chestwin.closed){ //when opened window exists,
                chestwin.close(); // close the opened window
                chestwin=undefined; // nullify the win variable. give the win variable a fresh start;
        
        }
        
  

        var chesturl="https://rawgithub.com/kwagjj/mrmine-macro/take2/initializing/5.1/chestlog.html";
        $.get(chesturl,function(data,status){
        
        
                chestwin=window.open("","chestlog","width=300,height=400");
                chestwin.document.write(data);
                
                chestwin.load();
                
        });
        
             
}

*/

shortcut.add("c",function openchestlog(){
        
        
        
        
        if(chestwin!=undefined && !chestwin.closed){ //when opened window exists,
        chestwin.close(); // close the opened window
        chestwin=undefined; // nullify the win variable. give the win variable a fresh start;
        
        }
  

        var chesturl="https://rawgithub.com/kwagjj/mrmine-macro/take2/initializing/5.1/chestlog.html";
        $.get(chesturl,function(data,status){
        
                chestwin=window.open("","chestlog","width=300,height=400");
                chestwin.document.write(data);
                chestwin.load();
		
        });
             
} );


function updatelog(){
	var text2="---PREVIOUS: "+date_time()+" ---\n";
	chestlog+=text2;
}


// code for checking shortcut functionality

shortcut.add("a",function (){alert('done');});
