
import threading
import time
import sys
import keyboard

i = 0
is_running = True

def a():
    global i, is_running
    while is_running:
        i += 1
        time.sleep(1)

def b():
    global i, is_running
    while is_running:
        print(i)
        time.sleep(10)

def on_key_press(key):
    global is_running
    if key == "q":  # esc 鍵的 ASCII 編碼為 \x1b
        is_running = False

def main():
    global is_running
    thread1 = threading.Thread(target=a)
    thread2 = threading.Thread(target=b)
    thread1.start()
    thread2.start()

    while is_running:
        time.sleep(1)

if __name__ == "__main__":
    
    keyboard.on_press(on_key_press)
    main()
    