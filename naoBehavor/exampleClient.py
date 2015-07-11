import socket

host = 'cookie'
port = 50016
size = 1024
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((host,port))
s.send('say=Your turn&volume=50&moveHand=true&lookUp=false')
#data = s.recv(size)
s.close()
