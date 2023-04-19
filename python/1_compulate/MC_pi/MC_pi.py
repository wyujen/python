import random
import numpy as np
import matplotlib.pyplot as plt
n = 1
m = 0
t = 10 
pi = []
while n <= 1000 :
    x = random.uniform(-1,1)
    y = random.uniform(-1,1)
    c = x*x+y*y
    if c <= 1 :
        m = m+1
    n = n+1
    g = (4*m)/n
    pi.append(g)

plt.plot(pi)


print(g)
