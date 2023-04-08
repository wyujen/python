# -*- coding: utf-8 -*-
"""
Created on Sat Dec 24 01:51:45 2022

@author: w
"""

import matplotlib 
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
#gdp=pd.read_csv("C:/Users/w/Desktop/time/data/d4sci.mplstyle")

plt.style.use("C:/Users/w/Desktop/time/data/d4sci.mplstyle")

air=pd.read_csv("C:/Users/w/Desktop/time/data/international-airline-passengers.csv",parse_dates=['Month'],sep=";")
air.info()
#air['Month']=pd.to_datetime(air['Month']+'-01')
air.set_index("Month",inplace=True)

ax=air.plot(y="Passengers",legend=False)
ax.set_xlabel("Date")
ax.set_ylabel("Passengers")

def a(x):
    x=x+1
    return x
    
a(2)

def running_average(x, order):
    index=x.index
    values=x.values
    current=x.values[:order].sum()
    running=[]
    
    for i in range(order,x.shape[0]):
        current+=values[i]
        current-=values[i-order]
        running.append(current/order)
      
    run=x.iloc[order:].copy()
    run=np.array(running)
      
    final=x.copy()[order:]
    final.iloc[:,0]=run
    return final

trand=running_average(air,12)
trand
