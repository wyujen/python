import numpy as np
import random as rd

#係數建立區

base_columns = 11
base_rows = 11

#列印table fuction

def print_table(name,table,n_st = " " ):
    n_st = str(n_st)
    if n_st == " ":
        name =" "+name+" "
    else:
        name =" NO. "+n_st+" Times "+name+" "
    print(name.center(60,"="))
    print(table)

#初始化 table fuction 地圖及Q_table

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

#初始位置

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

#是否嘗試新路線 輸出 0 為是；輸出 1 為否
def new_action(study = 0.9):
    action = rd.uniform(0,1)
    if action < study:
        return 1
    else:
        return 0

#初始化紀錄路線

def init_route():
    route = []

#移動方向

def random_action():
    ac

#運行區

base_table, q_table = init_table()

