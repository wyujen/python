# -*- coding: utf-8 -*-
"""
Created on Thu Dec 22 11:13:17 2022

@author: w
"""
import matplotlib 
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
gdp=pd.read_csv("C:/Users/w/Desktop/time/data/GDP.csv",parse_dates=["DATE"])

gdp.set_index("DATE",inplace=True)

gdp.head(5)
gdp.info()

ax=gdp.plot(legend=False)

ax.set_ylabel(r'GDP ($\$B$)')

ILI=pd.read_csv("C:/Users/w/Desktop/time/data/CDC.csv")
ILI.head
ILI[["Percent of Deaths Due to Pneumonia and Influenza","Expected","Threshold"]].plot()
ILI["date"]=ILI["Year"]+ILI["Week"]/52
ax=ILI.plot(x="date",y=["Percent of Deaths Due to Pneumonia and Influenza","Expected","Threshold"])
ax.legend(["Mortality","Expected","Threshold"])
ax.set_xlabel("Date")
ax.set_ylabel("%Mortality")

Sun=pd.read_csv("C:/Users/w/Desktop/time/data/sun.csv")
ax=Sun.plot(x="YEAR",y="SUNACTIVITY",legend=False)
ax.set_ylabel("Sun spot activity")
ax.set_xlabel("Year")


DJIA=pd.read_csv("C:/Users/w/Desktop/time/data/DJIA.csv",parse_dates=["DATE"],na_values=".")
DJIA.set_index("DATE",inplace=True)
ax=DJIA["2017":"2018"].plot(legend=False)
ax.set_ylabel("DJIA")
ax.set_xlabel("Date")
DJIA.info()


Air=pd.read_csv("C:/Users/w/Desktop/time/data/international-airline-passengers.csv",parse_dates=["Month"],sep=";")
Air.set_index("Month",inplace=True)
ax=Air.plot(legend=False)

ax.set_xlabel("Date")
ax.set_ylabel("Passengers")
Air.head(5)



