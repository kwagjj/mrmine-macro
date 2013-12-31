var sflag=0;

var sellarray=[1,1,1,1,1,0,0,0,0,0,0,0];  // list of ones to sell. order as written in table.

function slooping()
{
	
	if(sflag==0)
	{
		for(i=0;i<sellarray.length;i++)
		{	
			if(sellarray[i]==1){
				var j=i+2;
				
			
				document.getElementById("SB"+j).onclick();
	
			}
		}	
	}
	else{
	}
}


var interval=setInterval(slooping,300);
