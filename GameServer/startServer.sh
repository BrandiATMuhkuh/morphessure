#!/bin/bash

read -e -p "Enter condition number: " -i "" CONDITION
#echo $CONDITION

read -e -p "Enter participant id: " -i "" PARTICIPANTID
#echo $PARTICIPANTID

read -e -p "Enter robot address: " -i "" ROBOTADDRESS
#echo $ROBOTADDRESS

echo "iosj server/index.js --condition $CONDITION --pId $PARTICIPANTID --robotAddress $ROBOTADDRESS"

#trap "kill 0" SIGINT
#(python naoServer/index.py) & (grunt nodemon) & (grunt serve)
