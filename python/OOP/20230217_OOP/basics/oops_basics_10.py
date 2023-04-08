class My_Calc:

    def __init__(self,num1,num2):
        self.num1=num1
        self.num2=num2

    def total(self):
        
        return self.num1 + self.num2

        

    def diff(self):

        return self.num1 - self.num2

def main():

    print("Hellow from the main method !")

    calc1=My_Calc(10,20)
    total1 = calc1.total()
    diff1 = calc1.diff()

    print("Total1:",total1)
    print("Diff1:",diff1)
    print()
    calc2=My_Calc(5,25)
    total2 = calc2.total()
    diff2 = calc2.diff()

    print("Total2:",total2)
    print("Diff2:",diff2)


if __name__ == '__main__':
    main()





