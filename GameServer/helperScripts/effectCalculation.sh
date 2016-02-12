#Description
#This script calucates the effect the experiment had on the words which are used. Not the valance shift!
#autoput is on stdout. Use for example 'effectCalulation.sh > shift.csv' to save the output

#Install Requirements
#sudo apt-get install sqlite3 libsqlite3-dev

#This file will download the analysis data from a given sqlite database
DATABASE='/home/jbr134/pCloudDrive/morphessorSingleFiles/logging.sqlite'
showeffect=0 #set this to 1 if you want the overall effect

#Get all user with pId from database
TS=`sqlite3 $DATABASE "select DISTINCT pId, condition from log where timestamp > 1443056621939 AND pId NOT GLOB '*[A-Za-z]*' and pId NOT GLOB '111*'"`

#header on Off
header='pId,cId,preWord,robotWord,postWord,symbolName,strategy,effect'

if [ $showeffect -eq 1 ]
	then
	header='pId,cId,effect, count'
fi


echo $header
for T in $TS; do

IFS='|' read -ra ADDR <<< "$T"

#echo ${ADDR[0]}
#echo ${ADDR[1]}

STATEMENT="select  '${ADDR[0]}' as pId, '${ADDR[1]}' as cId, preWord, quote(robotWord), word as postWord, post.symbolName as symbolName, change as strategy,
	CASE WHEN preWord != word and change = 'NA'
	THEN 'NRCHANGE'
	ELSE
		CASE WHEN preWord = word and change = 'NA'
		THEN 'NRMATCH'
		ELSE
			CASE WHEN preWord != word and change != 'NA'
			THEN 'CHANGE'
			ELSE  'MATCH'
			END
		END
	END as effect

 from (
select pre.word as preWord, robot.word as robotWord, pre.symbolName, correct ,
	CASE WHEN pre.word = robot.word
	THEN 'MATCH'
	ELSE
		CASE
		WHEN robot.word is null
		THEN 'NA'
		ELSE 'CHANGE'
		END
	END AS change
from (
select word, symbolName, correct from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'singlePlayer' and type = 'LogPlayerSaid' ORDER by ISOTime
) as pre
LEFT JOIN (select DISTINCT word, symbolName from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}'  and transmitter = 'player2' and level = 'multiPlayer' and type = 'LogPlayerShouldSay' ORDER by ISOTime) as robot
on pre.symbolName = robot.symbolName) as preRobot
LEFT JOIN (select word, symbolName, correct from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'secSinglePlayer' and type = 'LogPlayerSaid' ORDER by ISOTime) as post
on preRobot.symbolName = post.symbolName"

#echo $STATEMENT

if [ $showeffect -eq 1 ]
	then


	STATEMENT="select '${ADDR[0]}' as pId, '${ADDR[1]}' as cId, effect, count(effect) from (

select *,
	CASE WHEN preWord != word and change = 'NA'
	THEN 'NRCHANGE'
	ELSE
		CASE WHEN preWord = word and change = 'NA'
		THEN 'NRMATCH'
		ELSE
			CASE WHEN preWord != word and change != 'NA'
			THEN 'CHANGE'
			ELSE  'MATCH'
			END
		END
	END as effect

 from (
select pre.word as preWord, robot.word as robotWord, pre.symbolName, correct ,
	CASE WHEN pre.word = robot.word
	THEN 'MATCH'
	ELSE
		CASE
		WHEN robot.word is null
		THEN 'NA'
		ELSE 'CHANGE'
		END
	END AS change
from (
select word, symbolName, correct from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'singlePlayer' and type = 'LogPlayerSaid' ORDER by ISOTime
) as pre
LEFT JOIN (select DISTINCT word, symbolName from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}'  and transmitter = 'player2' and level = 'multiPlayer' and type = 'LogPlayerShouldSay' ORDER by ISOTime) as robot
on pre.symbolName = robot.symbolName) as preRobot
LEFT JOIN (select word, symbolName, correct from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'secSinglePlayer' and type = 'LogPlayerSaid' ORDER by ISOTime) as post
on preRobot.symbolName = post.symbolName
) group by effect"
fi




sqlite3 $DATABASE <<!
.headers off
.mode csv
$STATEMENT;
!


done
