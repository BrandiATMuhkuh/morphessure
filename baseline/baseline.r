#Libraries
library(RSQLite) #to user sql in r
library(data.table)
library(plyr)
library(ggplot2)
library(gridExtra)

sqlite <- dbDriver("SQLite")
con <- dbConnect(sqlite,"baseline.db")
alltables = dbListTables(con)
synonyms = dbGetQuery( con,'select * from synonyms' )
valance = dbGetQuery( con,'select * from valance' )

calcViaDB = function(){
  mymerge = merge(x = valance, y = synonyms, by.x = "wordId", by.y = "qualRef", all.x  = TRUE)
  mymerge = mymerge[mymerge$word == 1,]
  mymerge = mymerge[c("ref", "valance")]
  
  temp1 = aggregate(mymerge$valance, by=list(ref = mymerge$ref), FUN = sum) #get sum
  colnames(temp1)[2] = "sumVal"
  temp2 = aggregate(cbind(counts = ref) ~ mymerge$ref, data = mymerge, FUN = function(x){NROW(x)});
  colnames(temp2)[1] = 'ref'
  mymerge = merge(x = temp1, y = temp2)
  mymerge = ddply(mymerge, colnames(mymerge), summarize, sVal = sumVal/counts)
  mymerge$sVal = mymerge$sumVal/mymerge$counts #same as previous line
  
  return(mymerge);
}

calcViaR = function(){
  mySumVal = dbGetQuery(con, 'select *, sumVal*1.0/counts as sVal from (Select ref, sum(valance) as sumVal, count(ref) as counts from valance LEFT JOIN synonyms ON wordId=qualRef where word = 1  GROUP BY ref);')
  return(mySumVal);
}

calcViaDB();
calR = calcViaR();


dotchart(calR$sVal,labels=calR$ref,cex=.8,
         main="Words", 
         xlab="Valance")


calR$ref <-factor(calR$ref, levels=calR[order(calR$sVal), "ref"])

x <-ggplot(calR, aes(y=ref, x=sVal)) + 
  geom_point(stat="identity")


grid.arrange(x)
