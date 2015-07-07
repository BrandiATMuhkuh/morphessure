import socket 

host = 'cookie.local' 
port = 50016 
size = 1024 
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
s.connect((host,port)) 
s.send('say=hello how are you?&volume=50')
#data = s.recv(size) 
s.close() 
