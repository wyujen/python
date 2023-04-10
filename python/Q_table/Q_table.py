import numpy as np
import random as rd

#係數建立區

base_columns = 11
base_rows = 11

#獨立功能塊 Start

#列印table fuction

def print_table(name,table,n_st = " " ):
    n_st = str(n_st)
    if n_st == " ":
        name =" "+name+" "
    else:
        name =" NO. "+n_st+" Times "+name+" "
    print(name.center(60,"="))
    print(table)

#初始化紀錄路線

def init_route():
    route = []
    q_vallue_action = [] 
    return route, q_vallue_action

#獨立功能塊 end

#(二-1)初始化 table fuction 地圖及Q_table

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
    q_table = np.zeros((base_rows, base_columns ,4))
    return base_table, q_table

#(二-2)初始位置

def random_start():
    output = 0
    while output == 0:
        t_x = np.random.randint(0,11)
        t_y = np.random.randint(0,11)
        z = base_table[t_x,t_y]
        if z == -1 :
            return t_x,t_y
            output = 1
        else :
            continue

#(二-3)start

#是否嘗試新路線 輸出 0 為是；輸出 1 為否
def try_new_action(try_tast = 0.9):
    action = rd.uniform(0,1)
    if action < try_tast:
        return 1
    else:
        return 0

#隨機移動方向 0上 1右 2下 3左

def random_direction():
    t_direction = np.random.randint(0,4)
    return t_direction


#判斷Qvalue最大值方向

def judge_max_qvalue_direction(q_table,t_x,t_y):
    t_q_direction = []
    for i in range (0,4):
        t_q_direction.append(q_table[t_x,t_y,i])
    if t_q_direction[0]==t_q_direction[1]==t_q_direction[2]==t_q_direction[3]:
        t_direction = random_direction()
    else :
        max_q_value= max (t_q_direction)
        t_direction = t_q_direction.index(max_q_value)
    return t_direction

#(二-3) end 決定t時的方向
def get_t_direction(q_table,t_x,t_y,try_tast = 0.9):
    try_new_action_value = try_new_action()
    if try_new_action_value == 0:
        t_direction = random_direction()
    elif try_new_action_value == 1:
        t_direction = judge_max_qvalue_direction(q_table,t_x,t_y)
    else:
        print("get_t_direction error")
    return t_direction

#t位置改變至t+1
#輸入t時xy座標
#輸出t+1時xy 座標為 t_add_x,t_add_y

def t_add_loadcation(t_x,t_y,t_direction):
    limit_x = 10

    if t_direction == 0 :
        t_add_y = t_y - 1

    elif t_direction == 1 and t_x < limit:
        t_add_x = t_x + 1

    elif t_direction == 2 :
        t_add_y = t_y - 1
    elif t_direction == 3 and t_x > 0:
        t_add_x = t_x - 1
    else:
        t_add_x = t_x
        t_add_y = t_y
    return t_add_x,t_add_y
    

    
#計算分數及分數更新
# 1.reward = t+1 reward  
# 2.new_max_fraction = t+1 所有方向中最高state值
# 3.t_direction = t 過來的方向的Q_value值
# 4.attenuation = 衰減率 (預設0.9)
# 5.study = 學習率 (預設0.9)
# 6.輸出為 new_q_direction 為t位置時往t+1方向，新的Q值
# 7.更新Qtable值

def q_value_calculate(base_table,q_table,t_x,t_y,t_add_x,t_add_y, t_direction , attenuation = 0.9 , study = 0.9):
    
    reward = base_table[t_add_x,t_add_y]
    new_max_fraction = judge_max_qvalue_direction(q_table,t_add_x,t_add_y)
    t_add_max_q = q_table[t_add_x,t_add_y,new_max_fraction]

    td = reward + (attenuation*t_add_max_q) - t_direction
    new_q_direction = (td * study) + t_direction

    q_table[t_x,t_y,t_direction] = new_q_direction
    return q_table


def train_q(train ,base_table,q_table):
    train_n = 1
    while train_n < train :
        train_t = 1
        t_x , t_y = random_start()
        while train_t == 1 :
            t_direction = get_t_direction(base_table,t_x,t_y)
            t_add_x,t_add_y = t_add_loadcation(t_x,t_y,t_direction)
            q_table = q_value_calculate(base_table,q_table,t_x,t_y,t_add_x,t_add_y, t_direction)
            record =[]
            record.append(t_x,t_y)
            t_x = t_add_x
            t_y = t_add_y
            if base_table[t_add_x,t_add_y] == -100 or 100 :
                train_t = 0
                train_n = train_n + 1
            else :
                continue
    else :
        print("訓練完成")
        return q_table , record

        







#運行區

start_value = 1 
while start_value == 1:
    base_table , q_table = init_table()
    train = int(input("輸入預訓練次數"))
    q_table,record = train_q(train,base_table,q_table)

    command_value = 1
    while command_value == 1:
        print("1 = 再訓練 2 = 取得最短路徑 3 = 展示 Q table  4 = 重新訓練")
        command_table = [1,2,3,4]
        command = inputint(("請輸入數字"))

        if command not in command_table:
            print("輸入錯誤")
            continue
        elif command == 1:
            train = input("輸入訓練次數")
            q_table = train_q(train,base_table,q_table)
            continue
        elif command == 2:
            continue
        elif command == 3:
            print(q_table)
            continue
        elif command == 4:
            continue
        elif command == 5:
            command_value = 0
            break








