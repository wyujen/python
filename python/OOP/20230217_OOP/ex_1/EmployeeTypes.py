

from abc import ABC, abstractmethod


class Employee:
    def __init__(self,first_name,last_name,emp_id,years_of_experience):
        self.first_name = first_name
        self.last_name = last_name
        self.emp_id = emp_id
        self.years_of_experience = years_of_experience

    def get_monthly_salary(self):
        x = self.emp_id + self.years_of_experience
        pass

    def get_annual_bouns(self):
        pass

class FullTimeManagementEmployee(Employee):

    __management_bouns_percentage = 20

    def __init__(self,first_name,last_name,emp_id,years_of_experience,annual_salary):
        super().__init__(first_name,last_name,emp_id,years_of_experience)
        self.annual_salary=annual_salary

    def get_monthly_salary(self):
        return round (self.annual_salary/12,2)
        pass

    def get_annual_bouns(self):
        std_bonus = self.annual_salary * (self.__management_bouns_percentage/100)
        expperience_bouns = std_bonus * (self.years_of_experience / 100)
        return std_bonus + expperience_bouns

class FullTimeSarlariedEmployee(Employee):


    __employee_bouns_percentage = 5

    def __init__(self,first_name,last_name,emp_id,years_of_experience,annual_salary):
        super().__init__(first_name,last_name,emp_id,years_of_experience)
        self.annual_salary=annual_salary

    def get_monthly_salary(self):
        return self.annual_salary/12

    def get_annual_bouns(self):
        std_bonus = self.annual_salary * (self.__employee_bouns_percentage/100)
        expperience_bouns = std_bonus * (self.years_of_experience / 100)
        return std_bonus + expperience_bouns
    
class HourlyContractor(Employee):
    __contractor_bonus_percentage = 0.00
    __weekly_work_hours = 40

    def __init__(self, first_name, last_name, emp_id, years_of_experience,hourly_rate):
        super().__init__(first_name, last_name, emp_id, years_of_experience)
        self.hourly_rate = hourly_rate

    def get_monthly_salary(self):
        return round((self.__weekly_work_hours * 4) * self.hourly_rate, )


    def get_annual_bouns(self):
        return self.__contractor_bonus_percentage


class HourlyEmployee(Employee):


    __employee_bonus_percentage = 2
    __weekly_work_hours = 40

    def __init__(self, first_name, last_name, emp_id, years_of_experience, hourly_rate):
        super().__init__(first_name, last_name, emp_id, years_of_experience)
        self.hourly_rate = hourly_rate

    def get_monthly_salary(self):
        return (self.__weekly_work_hours *4 ) * self.hourly_rate

    def get_annual_bouns(self):
        
        std_bouns = ((self.__weekly_work_hours * 4) * self.hourly_rate * 12) * (self.__employee_bonus_percentage)
        experience_bonus = std_bouns * (self.years_of_experience / 100)
        return round(std_bouns + experience_bonus, 2)
        
class FullTimeSalariedSalesEmployee(FullTimeSarlariedEmployee):
    __employee_bonus_percentage = 3
    __weekly_work_hours = 40

    def __init__(self, first_name, last_name, emp_id, years_of_experience, annual_salary,commission_percentage):
        super().__init__(first_name, last_name, emp_id, years_of_experience, annual_salary)

        self.commission_percentage = commission_percentage

    def get_monthly_salary(self):
        monthily_salary = (super().get_monthly_salary())
        monthily_commission = monthily_salary * (self.commission_percentage / 100)
        
        return monthily_salary + monthily_commission

    def get_annual_bouns(self):
        std_bouns = self.annual_salary * (self.__employee_bonus_percentage / 100)
        experience_bonus = std_bouns * (self.years_of_experience / 100)
        return round(std_bouns + experience_bonus,2)
        
        return 




