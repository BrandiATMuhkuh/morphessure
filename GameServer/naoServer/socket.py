# This files listens to socket connection on a NAO robot
# The file needs to be placed into a choreograph python box.
# It should be used to controll NAO via sockets
# To activate a box output do the following
#	1) Create a box output and name it (eg. ABC)
#	2) Add a if statement on "Add here your commands!" that listends if the right socket command came in
#	3) Activate your output (eg. ABC) with self.<output-name>() (e.g. self.ABC() )
#
# Command definition: function1=value1&function2=value2
import socket
class MyClass(GeneratedClass):
    def __init__(self):
        GeneratedClass.__init__(self)
        self.run = True

    def getPar(self, url, par):
        for p in url.split("&"):
            if p.split("=")[0] == par:
                return p.split("=")[1]
        return None

    def onLoad(self):
        #put initialization code here

        pass

    def onUnload(self):
        #put clean-up code here

        self.server.shutdown(socket.SHUT_RDWR)
        self.server.close()

        pass

    def onInput_onStart(self):
        #self.onStopped() #activate the output of the box


        host = ''
        port = 50016
        backlog = 1
        size = 1024
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.server.bind((host,port))
        self.server.listen(backlog)

        try:
            while self.run:

                client, address = self.server.accept()

                self.client = client
                data = client.recv(size)
                if data:
                    self.logger.debug(data)
                    #Add here your commands!
                    if self.getPar(data, 'lookUp'):
                        if self.getPar(data, 'lookUp') == "true":
                            self.lookUp(1)
                        else:
                            self.lookUp(0)
                    if self.getPar(data, 'say'):
                        self.say(self.getPar(data, 'say'))
                    client.send(data)
                client.close()
        except:
            self.logger.debug("close")

        pass

    def onInput_onStop(self):
        self.onUnload() #it is recommended to reuse the clean-up as the box is stopped
        self.onStopped() #activate the output of the box

