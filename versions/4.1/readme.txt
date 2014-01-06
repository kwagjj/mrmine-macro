readme for ver 4.1

issue#1: make pressing 's' key under the situation where sell_window is already open but hidden, will make sell_window appear again.
	- .focus()
	- in chrome window.focus() is diabled so I should manually close it and reopen it.
	** COMPLETE
	
	
issue#2: open PLACE1(sell center) before initiating 'startsell()'
	- simply insert a simple code to open PLACE1.
	** COMPLETE
	
	
issue#3: if PLACE1 page is closed, make sure the sell_window displays: "continue sell"
	- connecting with issue#2, if issue#2 is implemented, it will allow user to be convenient to continue sell.
	- need to find a way to recognize that the PLACE1 page is closed.... HOW???