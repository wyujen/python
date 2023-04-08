 # -*- coding: utf-8 -*-
"""
Created on Fri Dec 23 12:56:54 2022

@author: w
"""

import matplotlib 
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
#gdp=pd.read_csv("C:/Users/w/Desktop/time/data/GDP.csv",parse_dates=["DATE"])
plt.style.use("C:/Users/w/Desktop/time/data/d4sci.mplstyle")
x=np.linspace(0,np.pi*10,360)
y=np.sin(x)

fig,axs=plt.subplots(2,2,figsize=(18,18))
axs[0][0].plot(x,y)
axs[0][0].set_title("stat. series")
axs[0][0].set_xlabel("time")
axs[0][0].set_ylabel("amplitude")

axs[0][1].plot(x,y+x/10)
axs[0][1].set_title("change mean")
axs[0][1].set_xlabel("time")
axs[0][1].set_ylabel("amplitude")

fig,axs=plt.subplots(2,2,figsize=(18,18))
axs[1][0].plot(x,y*x/10)
axs[1][0].set_title("change var")
axs[1][0].set_xlabel("time")
axs[1][0].set_ylabel("amplitude")

axs[1][1].plot(np.sinc(x+x*x/30))
axs[1][1].set_title("change mean")
axs[1][1].set_xlabel("time")
axs[1][1].set_ylabel("amplitude")

plt.tight_layout()


Air=pd.read_csv("C:/Users/w/Desktop/time/data/international-airline-passengers.csv",parse_dates=["Month"],sep=";")
Air.set_index("Month",inplace=True)
ax=Air.plot(legend=False)
ax.set_xlabel("Date")
ax.set_ylabel("Passengers")

Air["Year"]=Air.index.year
ax=Air[["Year","Passengers"]].groupby("Year").mean().plot(legend=False)
ax.set_ylable(r"$\langle passengers\rangle$")

stats=Air[["Year","Passengers"]].groupby("Year").mean()
stats["Max"]=Air[["Year","Passengers"]].groupby("Year").max()
stats["Min"]=Air[["Year","Passengers"]].groupby("Year").min()
stats["Range"]=stats["Max"]-stats["Min"]
ax=stats.plot(y="Passengers",yerr="Range",legend=False)
ax.set_ylabel(r'$\langle Passengers\rangle$')

stats

#Percent of Deaths Due to Pneumonia and Influenza

cdc=pd.read_csv("C:/Users/w/Desktop/time/data/CDC.csv")
stats=cdc[["Year","Percent of Deaths Due to Pneumonia and Influenza"]].groupby("Year").mean()
ax=stats.plot(y="Percent of Deaths Due to Pneumonia and Influenza",legend=False)








