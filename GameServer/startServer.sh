trap "kill 0" SIGINT
(python naoServer/index.py) & (grunt nodemon) & (grunt serve) 
