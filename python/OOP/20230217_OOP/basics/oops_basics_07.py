

class Car:
    no_of_tires=4

    def __init__(self,make,model,year,color,moon_roof=False):
        make = make
        self.model=model
        self.year=year
        self.color=color
        self.moon_roof=moon_roof
        self.engine_running=False


    def start_the_engine(self):
        self.engine_running=True
    
    def stop_the_engine (self):
        self.engine_running=False


def main():
    print("Hello")
    


if __name__ == "__main__":
    main()









