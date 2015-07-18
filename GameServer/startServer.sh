#!/bin/bash
#cd /home/jbr134/Documents/Development/morphessure/GameServer
pwd

read -e -p "Enter condition number: " -i "" CONDITION
#echo $CONDITION

read -e -p "Enter participant id: " -i "" PARTICIPANTID
#echo $PARTICIPANTID

read -e -p "Enter robot address: " -i "" ROBOTADDRESS
#echo $ROBOTADDRESS

#echo "iojs --debug --harmony_classes server/index.js --condition $CONDITION --pId $PARTICIPANTID --robotAddress $ROBOTADDRESS"

#read -e -p "Press any Key to start"

trap "kill 0" SIGINT
(iojs --debug --harmony_classes server/index.js --condition $CONDITION --pId $PARTICIPANTID --robotAddress $ROBOTADDRESS) & (grunt serve --force)
#(python naoServer/index.py) & (grunt nodemon) & (grunt serve)

read -e -p "Press Ctrl + C to end"
