readme for ver4

development log:

issue#1: adding hotkey that will pop up the sell_window
	- due to lack of knowledge on javascript, planning to utilize shortcut.js downloaded from a website(http://www.openjs.com/scripts/events/keyboard_shortcuts/)
	- I did utilize the shortcut.js but it doesn't allow callback functions 



issue#2: adding buttons that will start/stop selling
	* how about using a toggle button instead of two buttons?
	* when pressing 'continue sell' button, it should automatically apply the new sellorder to parent window.
		# reuse child's apply() function?
		# after sending back new sellorder, window.opener.startsell();
	* when pressing 'stop sell' button, should trigger stopsell() function at parent window.
		# at child window, window.opener.stopsell();
	* then delete apply button and just replace it with close button.(no longer in need of apply button since the toggle button will also do the function of apply button)

	1. check proper loading of togglebtn.value
		1-1. must create a parent window environment from jsbin.com
	2. check 'stop sell' toggle
	3. check 'start sell' toggle
		3-1. reuse apply() function
		3-2. add window.opener.stopsell()
	4. delete apply btn and add close btn
	
	** issue#2 complete
	
issue#3: the looping is not properly utilizing loopflag and is not yet fully corporated with newly introduced sellstatus variable
	
	1. take care of looping
		- perhaps remove setInterval and use "while loop + timer" and change looping with loopflag/sellstatus
		- loopflag and sellstatus obviously seems similar.
	2. then incorporate 'sellstatus' variable
	
	
	- infinite while loop doesn't seem to work. guess I have to use the setInterval eventually.
