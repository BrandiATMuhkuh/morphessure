import cherrypy
from naoqi import ALProxy
tts = ALProxy("ALTextToSpeech", 'dontusethisrobot.canterbury.ac.nz', 9559)

class HelloWorld(object):

    @cherrypy.expose
    def index(self, volume=None, say=None):
    	#test = " juhu "
        #print "Hello World!3 "+a+say
        if volume is not None:
        	print ("volume: ", volume)
        	tts.setVolume(float(volume))

        if say is not None:
        	print ("say: ", say)
        	tts.say(str(say))
        return "done";

    index.exposed = True
cherrypy.server.socket_host = '0.0.0.0'
cherrypy.quickstart(HelloWorld())
