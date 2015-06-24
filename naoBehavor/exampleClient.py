import socket 

host = 'localhost' 
port = 50016 
size = 1024 
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
s.connect((host,port)) 
s.send('say=hello&lookUp=false')
#data = s.recv(size) 
s.close() 
