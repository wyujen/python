

class Car:
    no_of_tires=4

    def __init__(self):
        self.make=""
        self.model=""
        self.year=""
        self.color=""
        self.moon_roof=""
        self.engine_running=False
 
     

    def start_the_engine(self):
        self.engine_running=True
    
    def stop_the_engine (self):
        self.engine_running=False


def main():
    print("Hello")
    car1=Car()
#car1 value
    car1.make="Ford"
    car1.model="mustang"
    car1.year="2010"
    car1.color="Blue"
    

#car1
    print("printing car1 details:".center(50,"-"))
    print("Make:{}".format(car1.make))
    print("Model:{}".format(car1.model))
    print("Year:{}".format(car1.year))
    print("Color:{}".format(car1.color))
    print("Moon Roof:{}".format(car1.moon_roof))


    

#class
    print("class Attributes:".center(50,"-"))
    print("car1:",car1.no_of_tires)
    print("car",Car.no_of_tires)

if __name__ == '__main__': 
    main()










