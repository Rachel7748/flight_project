from abc import ABC, abstractmethod
from fligts import Flights
from users import Users
from airline_companies import Airline_Companies
from countries import Countries
import logging
from error_fligt_not_found import FlightNotFound
from error_wrong_input import WrongInput


class FacadeBase(ABC):

    @abstractmethod
    def __init__(self, repo, _logging, logger):
        self.repo = repo
        logging.basicConfig(filename='my_log')
        self.logger = logging

    def get_all_flights(self):
        self.logger.Logger.info()
        return self.repo.get_all(Flights)

    def get_flights_by_id(self, id):
        self.logger.Logger.debug()
        if not isinstance(id,int):
            self.logger.Logger.error(f'{WrongInput}')
            raise WrongInput
        else:
            self.logger.Logger.info(f'flight found')
            return self.repo.get_by_id(Flights, id)

    def get_flights_by_parameters(self, id, origin_country_id, destination_country_id, date):
        self.logger.Logger.debug(f'find flight by parameters')
        if self.repo.get_by_condition(Flights, lambda query:filter(Flights.origin_country_id == origin_country_id,Flights.destination_country_id == destination_country_id)):
           self.logger.Logger.error(f'{FlightNotFound} flight wasnt found')
           raise FlightNotFound
        else:
            self.logger.Logger.info('flight found')
        return self.repo.get_by_condition(Flights,lambda query:filter(Flights.origin_country_id == origin_country_id,Flights.destination_country_id == destination_country_id))


    def get_all_airlines(self):
        self.logger.Logger.info(f'all airlines')
        return self.repo.get_all(Airline_Companies)

    def get_airline_by_id(self, id):
        self.logger.Logger.debug('find airline by id')
        if not isinstance(id,int):
            self.logger.Logger.error(f'{WrongInput} please input integer only')
            raise WrongInput
        else:
            self.logger.Logger.info('get airline by id')
        return self.repo.get_by_id(Airline_Companies, id)

    def create_user(self,user):
        if not isinstance(user, Users):
            self.logger.Logger.error(f'{WrongInput} input has to be from users')
            raise WrongInput
        else:
            self.logger.Logger.info(f'User:{user.username}')
            return self.repo.add(user)



    def add_all_customers(self,customer):
        return self.repo.add_all_customers(customer)

    def add_airlines(self,airline):
        return self.repo.add(airline)

    def add_all_airlines(self, airline):
        return self.repo.add_all(airline)

    def get_all_countries(self):
        self.logger.Logger.info('get countries')
        return self.repo.get_all(Countries)

    def get_country_by_id(self, id):
        if not isinstance(id, int):
            self.logger.Logger.error(f'{WrongInput} please input integer only')
            raise WrongInput
        else:
            self.logger.Logger.info('get country by id')
        return self.repo.get_by_id(Countries, id)


    def add_user (self, user):
        self.repo.add_user(user)

    def __str__(self):
        return f'return: {self.repo}'

