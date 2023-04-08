
from oops_getting_depper_02 import Employee


employee2 = Employee("Papa","Jone",1000.00,10)
monthly_gross_pay = employee2.get_monthly_gross()
standard_annual_bonus = employee2.get_standard_annual_bonus_amount()

print("Annual salary : {:.2f}".format(employee2.base_annal_salary))
print("Monthly gross salary : {:.2f}".format(monthly_gross_pay))
print("Annual Standard Bouns : {:.2f}".format(standard_annual_bonus))