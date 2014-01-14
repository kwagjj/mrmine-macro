USER MANUAL
=================================

after when you have successfully loaded the snippetcode.. you will be able to use this macro completely. Here are some instructions and cautions about this macro.

### HOTKEYS
- s : popup 'selling' window
- c : popup 'looting' window
- a : this key pops up an alert with 'done' but it is meaningless. just put it in so I could check whether the snippet was running properly.

### SOME FACTS
- the time interval for looting is 5 minutes.
- the time interval for selling is 5 seconds.
- looting is started automatically after loading the macro.
- selling is NOT started automatically after loading the macro.
- I haven't included auto selling for isotopes since they're rare and worthy of storing.
- One very weird thing about looting is that, if you just leave the mr.mine and the macro running on itself for a long time, you'll eventually notice that after approx. 1~2 hours, the macro seems to loot nothing. Based on my personal experience, I believe this is because no chests are generated after about 1~2 hours. I don't know why and I don't know if this is also a part of the Mr.Mine javascript code. All you could do is just.. open up the chrome tab with Mr.Mine and just swing your mouse around or click a few blank spots just to make sure the game understands 'you are present' every 1~2 hours. If you have a good idea to automate this too, please do so!

### SOME IRRITIATIONS THAT YOU MAY FACE
- while you have auto selling activated, any in-game windows(such as 'hire center' or 'drill center') will seem to close by its own after a few seconds of viewing. This is due to the 'auto selling' macro. I have made the selling macro with the following procedure: 'open sell center'-'click the sell buttons of ores' - 'press the close button'. The process is repeated every 5 seconds, therefore if you have your autoselling activated, any other windows that you have opened to view it will close every 5 seconds. So if you want to take your time looking into other center windows, please do it after deactivating the autoselling. 
- Sorry about not being able to include the feature of showing the rewards of each loot in the loot log. This is due to the complexity of the Mr.Mine javascript code. I tried to hook into the main functions and variable that stores all the valuable information but I was unable to call them directly with my macro because these variable & functions were inside a higher function. I'm sure you'll understand what this means if you have learned some basic programming.(global and local variables and stuff...). I tried to find a way but since I am not very good or specialized in programming, it was out of my reach. If you know how to do so, please stand up and try to modify my work to make it better. Anyways, the best I could come up with was just a loot log that only shows how many loots were accomplished.
