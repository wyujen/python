
#3_5Getter and Setter Methods

class Employee:

    def __init__(self,first_name,last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.__base_annal_salary = 0
        self.__bonus_percentage = 0
     #methhod   
    def get_monthly_gross(self):
        return self.__base_annal_salary / 12

    def get_standard_annual_bonus_amount(self):
        return self.__base_annal_salary * self.__bonus_percentage
    
    #getter
    @property
    def base_annual_salary(self):
        return self.__base_annal_salary
    @property
    def bouns_percentage(self):
        return self.__bonus_percentage

    #setter
    @base_annual_salary.setter
    def base_annual_salary(self,base_annual_salary):
        if 45000.00 <=base_annual_salary<=120000.00:
            self.__base_annal_salary = base_annual_salary
        else:
            print("Annual base salary must be between 45K and 120K!")
            
    @bouns_percentage.setter
    def bouns_percentage(self,bouns_percentage):
        if 0.05 <= bouns_percentage <= .21:
            self.__bonus_percentage = bouns_percentage
        else:
            print("bouns percent must between 5% (0.05) and 21%")




def main():

    print("Hello from main()! ")

    employee1 = Employee("Kara","Smith")
    employee1.bouns_percentage = 1
    employee1.base_annual_salary = 55000.00

    print(employee1.base_annual_salary)
    print(employee1.bouns_percentage)

    
    monthly_gross_pay = employee1.get_monthly_gross()
    standard_annual_bonus = employee1.get_standard_annual_bonus_amount()
    

    print("Annual salary : {:.2f}".format(employee1.base_annual_salary))
    print("Monthly gross salary : {:.2f}".format(monthly_gross_pay))
    print("Annual Standard Bouns : {:.2f}".format(standard_annual_bonus))



if __name__ =='__main__':
    main()