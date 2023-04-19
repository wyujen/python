# -*- coding: utf-8 -*-
"""
Created on Fri Nov  4 15:07:47 2022

@author: User
"""

import turtle as t #匯入繪圖模組
z=0                #reset係數歸零 (使其能為重複迴圈)
while z==0:        #使reset為最優先迴圈
    z=1                
    a=5            #圖形尺寸係數(可調整此係數為輸出圖規模大小調整)
    w=0            #終局判斷係數    (預設0,結束為1)
    w1=2           #終局情勢判斷係數(預設平局2,O贏為0,X贏為1)
    q=0            #OX方判斷係數(遊戲進行中判斷輸入方為何,預設O方1,X方0)
    r=0            #錯誤係數(判斷是否重複輸入)
    y=0            #總步數
    k=[0,1,2,3,4,5,6,7,8,9]   #輸入數值存放區,同時兼具驗證功能(扣除0,由左置右由上到下,一排三格)
    kx=[0,-30*a,0*a,30*a,-30*a,0,30*a,-30*a,0,30*a] #OX繪圖中心點定位x座標 
    ky=[-5*a,25*a,25*a,25*a,-5*a,-5*a,-5*a,-35*a,-35*a,-35*a]   #OX繪圖中心點定位y座標
    def clh (k,q,r,b):        #判斷及輸入數字至儲存區之副程式
        if b==k[b] and q==0:  #偵測輸入值位置,若等同其列表值(表示尚未輸入)且q值對,則將列表其位置值提換為10表O
          k[b]=10
          q=1
          return k,q,r,b
        elif b==k[b] and q==1:#偵測輸入值位置,若等同其列表值(表示尚未輸入)且q值對,則將列表其位置值提換為100表X
            k[b]=100
            q=0
            return k,q,r,b
        else:                 #若非則回傳錯誤係數為1,表錯誤發生(通常代表位置輸入重置)
            r=1
            return k,q,r,b
    
    def win (w,w1,k):         #判斷勝負之副程式
        if sum(k[0:4])==30 and w==0 and w1==2:    #加總儲存格1~3之位置,若等於30則O贏,回傳終局及形勢係數
            w=1
            w1=0
            return w,w1,k
        elif sum(k[0:4])==300 and w==0 and w1==2: #加總儲存格1~3之位置,若等於300則X贏,回傳終局及形勢係數
            w=1
            w1=1
            return w,w1,k
        elif sum(k[4:7])==30 and w==0 and w1==2:  #加總儲存格4~6之位置,若等於30則O贏,回傳終局及形勢係數
            w=1
            w1=0
            return w,w1,k
        elif sum(k[4:7])==300 and w==0 and w1==2: #加總儲存格4~6之位置,若等於300則X贏,回傳終局及形勢係數
            w=1
            w1=1
            return w,w1,k
        elif sum(k[7:10])==30 and w==0 and w1==2: #加總儲存格7~9之位置,若等於30則O贏,回傳終局及形勢係數
            w=1
            w1=0
            return w,w1,k
        elif sum(k[7:10])==300 and w==0 and w1==2:#加總儲存格7~9之位置,若等於300則X贏,回傳終局及形勢係數
            w=1
            w1=1
            return w,w1,k
        elif sum(k[1::3])==30 and w==0 and w1==2: #加總儲存格1,4,7之位置,若等於30則O贏,回傳終局及形勢係數
            w=1
            w1=0
            return w,w1,k
        elif sum(k[1::3])==300 and w==0 and w1==2:#加總儲存格1,4,7之位置,若等於300則X贏,回傳終局及形勢係數
            w=1
            w1=1
            return w,w1,k
        elif sum(k[2::3])==30 and w==0 and w1==2: #加總儲存格2,5,8之位置,若等於30則O贏,回傳終局及形勢係數
            w=1
            w1=0
            return w,w1,k
        elif sum(k[2::3])==300 and w==0 and w1==2:#加總儲存格2,5,8之位置,若等於300則X贏,回傳終局及形勢係數
            w=1
            w1=1
            return w,w1,k
        elif sum(k[3::3])==30 and w==0 and w1==2: #加總儲存格3,6,9之位置,若等於30則O贏,回傳終局及形勢係數
            w=1
            w1=0
            return w,w1,k
        elif sum(k[3::3])==300 and w==0 and w1==2:#加總儲存格3,6,9之位置,若等於300則X贏,回傳終局及形勢係數
            w=1
            w1=1
            return w,w1,k
        elif sum (k[1::4])==30 and w==0 and w1==2:#加總儲存格1,5,9之位置,若等於30則O贏,回傳終局及形勢係數
            w=1
            w1=0
            return w,w1,k
        elif sum (k[1::4])==300 and w==0 and w1==2:#加總儲存格1,5,9之位置,若等於300則X贏,回傳終局及形勢係數
            w=1
            w1=1
            return w,w1,k
        elif sum (k[3::2])==30 and w==0 and w1==2:#加總儲存格3,5,7之位置,若等於30則O贏,回傳終局及形勢係數
            w=1
            w1=0
            return w,w1,k  
        elif sum (k[3::2])==300 and w==0 and w1==2:#加總儲存格3,5,7之位置,若等於300則X贏,回傳終局及形勢係數
            w=1
            w1=1             
            return w,w1,k
        else:                                      #尚無勝負遊戲繼續
            return w,w1,k
    print("圖形繪製中......")
    #繪製井字格之程式         
    t.clear()                     #清空畫布
    t.pensize(5)                  #調整線條粗細
    t.color('black')              #令顏色為黑色
    t.up()                        #抬筆
    t.goto(-15*a,40*a)            #到第一筆畫起始位置
    t.pd()                        #下筆
    t.seth(270)                   #轉向
    t.fd(90*a)                    #向前繪製90*a個單位
    t.up()                        #抬筆
    t.goto(15*a, 40*a)            #到第二筆畫起始位置
    t.pd()                        #下筆
    t.seth(270)                   #轉向
    t.fd(90*a)                    #向前繪製90*a個單位
    t.up()                        #抬筆
    t.goto(-45*a, 10*a)           #到第三筆畫起始位置
    t.pd()                        #下筆
    t.seth(0)                     #轉向
    t.fd(90*a)                    #向前繪製90*a個單位
    t.up()                        #抬筆
    t.goto(-45*a,-20*a)           #到第四筆畫起始位置
    t.pd()                        #下筆
    t.seth(0)                     #轉向
    t.fd(90*a)                    #向前繪製90*a個單位
    t.up()                        #抬筆
    t.goto(-45*a,40*a)            #前往左上角繪製提示訊息
    t.pd()                        #下筆 #繪製提示訊息
    t.write('OOXX game\nLocation code\n1 2 3\n4 5 6\n7 8 9\nEnter number to start\nEnter 0 to reset' )
    t.up()                        #抬筆
    b=0                           #外界輸入暫存值(預設0)
    
    while w==0:                   #若終局判斷係數為0(表未結束,預設0)則執行
        b=int(input("number:"))   #外界輸入值存入 ,且限制其為整數
        if b<0 or b>10:           #若輸入值超出1~9範圍(限制輸入值為1~9)
            print("error")        #反饋外界錯誤
            continue              #繼續執行此迴圈(使不因錯誤而停止)
        elif b==0:                #若0則reset
            z=0                   #使reset係數為0
            break                 #跳出此迴圈,使重製
        elif 1<=b or 9>=b:        #限制輸入值為1~9
            k,q,r,b=clh(k,q,r,b)  #運行判斷及輸入數字至儲存區之副程式,並匯入匯出數據
            if r==1:              #若運行後錯誤係數為1(通常為重複填寫)
                print("error")    #反饋錯誤
                r=0               #歸零錯誤係數
                continue          #繼續執行此迴圈(使不因錯誤而停止)
            elif r==0 and q==1:   #若無錯誤,且ox判斷係數為1,則開始畫圈
                y=y+1             #總步數加1,藉此計算總步數
                t.goto(kx[b],ky[b]-12*a)#前往該格中心點定位值
                t.color('navy')   #調整畫筆顏色
                t.seth(0)         #轉向
                t.pd()            #下筆
                t.circle(12*a)    #以12*a為半徑化圓
                t.up()            #抬筆
                w,w1,k=win(w,w1,k)#導入判斷勝負副程式
                if y==9 and w==0: #若總步數達9,且未有勝負,則平局
                  w=1             #使終局判斷係數為1              
                continue          #繼續執行此迴圈
            elif r==0 and q==0:   #若無錯誤,且ox判斷係數為0,則開始畫叉
                y=y+1             #總步數加1,藉此計算總步數
                t.goto(kx[b], ky[b])#前往該格中心點定位值
                t.color('red')    #調整畫筆顏色
                t.seth(90)        #轉向
                t.fd(13*a)        #以13*a為單位向前
                t.seth(0)         #轉向
                t.fd(13*a)        #以13*a為單位向前
                t.pd()            #下筆
                t.seth(225)       #轉向
                t.fd(37*a)        #以13*a為單位向前繪製第一筆
                t.up()            #抬筆
                t.goto(kx[b], ky[b])#回中心點
                t.seth(90)        #轉向
                t.fd(13*a)        #以13*a為單位向前
                t.seth(180)       #轉向
                t.fd(13*a)        #以13*a為單位向前
                t.seth(315)       #轉向
                t.pd()            #下筆
                t.fd(37*a)        #以13*a為單位向前繪製
                t.up()            #抬筆
                w,w1,k= win (w,w1,k)#導入判斷勝負副程式
                if y==9 and w==0: #若總步數達9,且未有勝負,則平局
                   w=1            #使終局判斷係數為1
                continue          #繼續執行此迴圈        
                
    while  w==1:      #若終局判斷係數為1,則執行最終判斷結果
        if b==0:                               #若b為0則重置
            z=0                                #使reset係數為0
            break  
        elif  w1==0:                           #若終局形勢判斷為0,O贏
            print("O win")                     #程式區反饋O勝
            t.goto(0*a-5*a,50*a)               #移至繪圖提示定位區
            t.write("O is winner ! ")          #繪圖區反饋O勝
            b=int(input("Enter 0 to reset:"))    #輸入0重置遊戲   
            continue
        elif w1==1:                            #若終局判斷為1,且形勢判斷為1,X贏      
            print("X win")                     #程式區反饋X勝
            t.goto(0*a-5*a,50*a)               #移至繪圖提示定位區
            t.write("X is winner ! ")          #繪圖區反饋X勝
            b=int(input("Enter 0 to reset:"))    #輸入0重置遊戲 
            continue
        elif w1==2:                            #若終局形勢判斷為2,平局
            print("Tie")                       #程式區反饋平局
            t.goto(0*a-5*a,50*a)               #移至繪圖提示定位區
            t.write(" tie \n Enter 0 to reset")#繪圖區反饋平局
            b=int(input("Enter to reset:"))    #輸入0重置遊戲
            continue
                                               
        else:                                  #結束
          
            exit()                   

        
        
   
        
        
               
        
        

    

    







