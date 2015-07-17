#!/bin/bash

read -e -p "Enter condition number: " -i "" CONDITION
#echo $CONDITION

read -e -p "Enter participant id: " -i "" PARTICIPANTID
#echo $PARTICIPANTID

read -e -p "Enter robot address: " -i "" ROBOTADDRESS
#echo $ROBOTADDRESS

echo "iojs --debug --harmony_classes server/index.js --condition $CONDITION --pId $PARTICIPANTID --robotAddress $ROBOTADDRESS"

trap "kill 0" SIGINT
(iojs --debug --harmony_classes server/index.js --condition $CONDITION --pId $PARTICIPANTID --robotAddress $ROBOTADDRESS) & (grunt serve)
#(python naoServer/index.py) & (grunt nodemon) & (grunt serve)
