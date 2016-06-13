

#load the full dataset
#my.fullData = read.csv("all_full.csv")
#my.exp1 = subset(my.fullData, substr(cId,1,1) == '1')
#my.exp2 = subset(my.fullData, substr(cId,1,1) == '2')
#my.exp1a2 = subset(my.fullData, substr(cId,1,1) != '3')
#my.exp3 = subset(my.fullData, substr(cId,1,1) == '3')


Treament <- read.csv("~/Documents/Development/morphessure/dataAnaysis/Treament.csv", sep=";")

m1 = glm(Treament$INDEPENDENT ~ Treament$DEPENDENT + Treament$CONDITION, family = 'binomial')
anova(m1)
