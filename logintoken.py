from administrators import Administrators
from airline_companies import Airline_Companies
from customers import Customers
from abc import ABC, abstractmethod
from logger import Logger

class FacadeBase(ABC):
    @abstractmethod
    def __init__(self,repo):
        self.repo = repo
        self.logger = Logger.get_instance()

    def check_token(self, user_type, token):
        if user_type == Administrators:
            if token.role == 1:
                return True

            if user_type == Airline_Companies:
                if token.role == 2:
                    return True

            if user_type == Customers:
                if token.role == 3:
                    return True
                else:
                    return False
