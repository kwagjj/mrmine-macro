readme for ver4

development log:

- adding hotkey that will pop up the sell_window



- adding buttons that will start/stop selling
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
