NAO says "Very Fine" via XML and HTTP
===========

This is an example where I use SOAP to communicate with the NAO. Sometime one does not find a library for the language one prefers. In this case an own implementation comes in handy. This is my first attempt to use SOAP to communication with the NAO. As a next step I want to create a JavaScript library for this purpose.

Use this command and NAO says "Very Fine". Don't forget to change the IPAddress to your naos (Klick the chest button) `curl -X POST -d @sayHelloToNamo.soap.xml -A "gSOAP/2.7" -H "application/dime" http://10.32.48.160:9559`

NAO says "Very Fine" via Python Webserver
===========
The script `webServerToNaoSay.py` uses `cherrypy` to start a webserver and NaoQi python API (https://community.aldebaran-robotics.com/resources/) to connect to the nao. After you run the script (`python webServerToNaoSay.py`) you can use the `say=` parameter to send text to the robot (http://localhost:8080/index?say=Very%20fine).
