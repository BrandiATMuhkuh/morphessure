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
#select  '${ADDR[0]}' as pId, '${ADDR[1]}' as cId, 

STATEMENT="select pId, cId, preWord, quote(robotWord), postWord, symbolName, change as strategy,
	CASE WHEN preWord != postWord and change = 'NA'
	THEN 'NRCHANGE'
	ELSE
		CASE WHEN preWord = postWord and change = 'NA'
		THEN 'NRMATCH'
		ELSE
			CASE WHEN preWord != postWord and change != 'NA'
			THEN 'CHANGE'
			ELSE  'MATCH'
			END
		END
	END as effect
from (
select post.pId as pId, post.cId as cId,  preWord, robotWord, postWord, post.symbolName as symbolName,  
	CASE WHEN preWord = robotWord
	THEN 'MATCH'
	ELSE
		CASE
		WHEN robotWord is null
		THEN 'NA'
		ELSE 'CHANGE'
		END
	END AS change

from 
(select pId, condition as cId,  word as preWord, log.symbolName, correct as preCorrect from log
INNER JOIN (select  multi.symbolName as symbolName from (select * from (select Distinct symbolName  from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'singlePlayer' and type = 'LogPlayerSaid') as pre
INNER JOIN (select Distinct symbolName from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'secSinglePlayer' and type = 'LogPlayerSaid' ) as post 
ON pre.symbolName = post.symbolName) as prePost
INNER JOIN (select Distinct symbolName from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'multiPlayer' and type = 'LogPlayerShouldSay' ) as multi 
ON prePost.symbolName = multi.symbolName) as allowedSymbols on allowedSymbols.symbolName = log.symbolName
where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'singlePlayer' and type = 'LogPlayerSaid') as pre

INNER JOIN
(select pId, condition as cId,  word as postWord, log.symbolName, correct  as postCorrect from log
INNER JOIN  (select  multi.symbolName as symbolName from (select * from (select Distinct symbolName  from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'singlePlayer' and type = 'LogPlayerSaid') as pre
INNER JOIN (select Distinct symbolName from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'secSinglePlayer' and type = 'LogPlayerSaid' ) as post 
ON pre.symbolName = post.symbolName) as prePost
INNER JOIN (select Distinct symbolName from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'multiPlayer' and type = 'LogPlayerShouldSay' ) as multi 
ON prePost.symbolName = multi.symbolName) as allowedSymbols on allowedSymbols.symbolName = log.symbolName
where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'secSinglePlayer' and type = 'LogPlayerSaid') as post
on pre.symbolName = post.symbolName

LEFT JOIN 
(select DISTINCT  log.symbolName,  word as robotWord from log 
INNER JOIN  (select  multi.symbolName as symbolName from (select * from (select Distinct symbolName  from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'singlePlayer' and type = 'LogPlayerSaid') as pre
INNER JOIN (select Distinct symbolName from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'secSinglePlayer' and type = 'LogPlayerSaid' ) as post 
ON pre.symbolName = post.symbolName) as prePost
INNER JOIN (select Distinct symbolName from log where condition = '${ADDR[1]}' and pId = '${ADDR[0]}' and level = 'multiPlayer' and type = 'LogPlayerShouldSay' ) as multi 
ON prePost.symbolName = multi.symbolName) as allowedSymbols on allowedSymbols.symbolName = log.symbolName
where condition = '${ADDR[1]}' and pId = '${ADDR[0]}'  and transmitter = 'player2' and level = 'multiPlayer' and type = 'LogPlayerShouldSay' order by log.symbolName) as multi 
on pre.symbolName = multi.symbolName)"




sqlite3 $DATABASE <<!
.headers off
.mode csv
$STATEMENT;
!


done
