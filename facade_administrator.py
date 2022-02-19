from customers import Customers
from facade_anonymus import AnonymusFacade



class AdministratorFacade(AnonymusFacade):

    def __init__(self, repo):
        super.__init__(repo)


    def _get_all_customers(self):
        return self.repo.get_all(Customers)

    def add_airlines(self,airline):
        self.repo.add(airline)

    def add_customer(self,customer):
        self.repo.add(customer)

    def add_administrator(self, administrator):
        self.repo.add(administrator)

    def remove_airline(self, airline):
        self.repo.remove(airline)

    def remove_customer(self, customer):
        self.repo.remove(customer)

    def remove_administrator(self, administrator):
        self.repo.delete(administrator)

    def add_user(self, user):
        self.repo.add(user)

    def __str__(self):
        return f'{super().__init__}'

