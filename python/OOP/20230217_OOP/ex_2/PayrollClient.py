
from EmployeeTypes import *
from PayrollProcessor import *

management_employee_1 = FullTimeManagementEmployee("John", "Papa", 1001, 5 ,120000.00)
salaried_employee_1 = FullTimeSarlariedEmployee("k", "sm", 2001, 1 ,6000.00)
sales_employee_1 = FullTimeSalariedSalesEmployee("Ja", "mill", 1004, 10 ,80000.00,5)


lis_of_employees = [management_employee_1,salaried_employee_1,sales_employee_1]
payroll = PayrollProcess("07/01/2020")
payroll.print_payroll_report(lis_of_employees)
payroll.print_annual_bouns_report(lis_of_employees)