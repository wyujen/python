# -*- coding: utf-8 -*-
"""
Created on Wed Dec 21 15:21:19 2022

@author: w
"""

import matplotlib 
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

data = {"id":[23,42,12,86],"Name":["Bob","Karen","Kate","Bill"]}
data
series=pd.Series(data["Name"])
series
df=pd.DataFrame(data)
df
df.dtypes
df.info()
type(df["id"])

df.columns
df.index
df.shape
df.index = ["row"+str(i) for i in range(4)]
df.columns=["ID","Firstname"]

df.head(2)
df.tail(2)
df["ID"]
df.loc["row2"]
df.iloc[2]
df.iloc[2,0]
df.iloc[2].ID
df.loc["row1","Firstname"]
df.iloc[0:3]
df.loc["row1":"row3"]
df["id2"]=df.ID+45
df.append([{"Firstname":"Bruno","ID":15,"id2":30}])
df
df2=pd.concat([df,df])

data=pd.read_csv("C:/Users/w/Desktop/time/AAPL.csv")
data["Date"]=pd.to_datetime(data["Date"].astype("str"))
data.dtypes
data.set_index("Date",inplace=True)
data.info
data.index.day

df = pd.DataFrame({"A": range(3),"B": range(1,4)})
df
df["A"].map(lambda x:x+1)

df.transform(lambda x: x+1)
df
df.apply(np.sum,axis=1)

data["year"]=data.index.year
data[["Volume","year"]].groupby("year").sum()
data["month"]=data.index.month

pd.pivot_table(data[data["year"]>=2010],index="month",columns="year",values="Open",aggfunc=np.mean).plot()

A=pd.DataFrame({"lkey":["foo","bar","baz","foo"],"value":[1,2,3,4]})
B=pd.DataFrame({"rkey":["foo","bar","qux","bar"],"value":[5,6,7,8]})
A.merge(B,left_on="lkey",right_on="rkey",how="outer")

A.set_index("lkey",inplace=True)
B.set_index("rkey",inplace=True)
A.join(B,lsuffix="_l",rsuffix="_r",how="inner")

data.plot.scatter(x="Open",y="Close")
data.groupby("year").mean().plot(y="High")
  