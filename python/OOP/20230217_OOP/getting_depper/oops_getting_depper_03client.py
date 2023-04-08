from oops_getting_depper_03 import Employee


employee2 = Employee("Para","joe",5000.00)
employee2.__bonus_percentage=20
monthly_gross_pay = employee2.get_monthly_gross()
standard_annual_bonus = employee2.get_standard_annual_bonus_amount()
empid = employee2.get_empid()

print("Emp ID : {}".format(empid))
print("Annual salary : {:.2f}".format(employee2.base_annal_salary))
print("Monthly gross salary : {:.2f}".format(monthly_gross_pay))
print("Annual Standard Bouns : {:.2f}".format(standard_annual_bonus))