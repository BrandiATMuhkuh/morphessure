import cherrypy
from naoqi import ALProxy
tts = ALProxy("ALTextToSpeech", '10.32.48.160', 9559)

class HelloWorld(object):

    @cherrypy.expose
    def index(self, a='', b='empty', say="Hello"):
	test = " juhu "
        print "Hello World!3 "+a+say
	tts.say(str(say))
        return "Hello World!3 "+a+say

    index.exposed = True
cherrypy.server.socket_host = '0.0.0.0'
cherrypy.quickstart(HelloWorld())
