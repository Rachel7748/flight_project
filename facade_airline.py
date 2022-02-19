from facade_base import FacadeBase
from airline_companies import Airline_Companies
from fligts import Flights
from facade_anonymus import AnonymusFacade



class AirlineFacade(AnonymusFacade):
    def __init__(self, repo):
        super.__init__(repo)

    def get_flights_by_airline(self,airline):
        return self.repo.get_flights_by_airline(Flights,Flights.airline_company_id, airline.id)

    def update_airline(self, airline):
        return self.repo.update_by_id(Airline_Companies, Airline_Companies.id, airline.id, airline)

    #def update_flight(self, flight):
        #if flight.remaining_tickets < 0:
           # raise NoMoreTicketsLeft
        #self.repo.update_by_id(flight, Flights.id, flight.id., flight)

    def __str__(self):
        return f'{super().__init__}'
