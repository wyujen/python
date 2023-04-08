class PayrollProcess:
    def __init__(self, payroll_date) :

        self.payroll_date = payroll_date

    def print_payroll_report(self,list_of_employee):
        print("Payroll Report : {}" .center(50,"-").format(self.payroll_date))

        for emp in list_of_employee:
            print("{} {} : {:.2f}".format(emp.first_name, emp.last_name, emp.get_monthly_salary()))

    def print_annual_bouns_report(self, list_of_employees):
        print("Annual Bouns Report : {} ".center(50,"-").format(self.payroll_date))

        for emp in list_of_employees:
            print("{} {} {}".format(emp.first_name, emp.last_name,emp.get_annual_bouns()))