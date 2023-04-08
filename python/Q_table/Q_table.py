import numpy as np
import random as rd

base_columns = 11
base_rows = 11
def print_table(name,table,n_st = " " ):
    n_st = str(n_st)
    if n_st == " ":
        name =" "+name+" "
    else:
        name =" NO. "+n_st+" Times "+name+" "
    print(name.center(60,"="))
    print(table)

def init_table():
    #base table create
    base_table = np.full((base_rows, base_columns), -100)
    base_table[0,5] = 100
    for i in range(0, 11):
        base_table[5, i] = -1
        base_table[9, i] = -1
    for i in range(1, 10):
        base_table[1, i] = -1
        base_table[7, i] = -1
    for i in range(1, 8):
        base_table[3, i] = -1    
    base_table[2,1] = -1
    base_table[2,7] = -1
    base_table[2,9] = -1
    base_table[3,9] = -1
    base_table[4,3] = -1
    base_table[4,7] = -1
    base_table[6,5] = -1
    base_table[8,3] = -1
    base_table[8,7] = -1
    #Q-values table create
    q_table = np.full((base_rows, base_columns),0)
    return base_table, q_table

base_table, q_table = init_table()

def random_start():
    output = 0
    while output == 0:
        x = np.random.randint(0,11)
        y = np.random.randint(0,11)
        z = base_table[x,y]
        if z == -1 :
            return x,y
            output = 1
        else :
            break

def random_action():
    action = rd.uniform(0,1)
    print(action)

