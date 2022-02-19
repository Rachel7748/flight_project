import pytest
from db_config import local_session, config
from db_repo import DBrepo
from facade_anonymus import AnonymusFacade
from fligts import Flights
from airline_companies import Airline_Companies



repo = DBrepo(local_session)

@pytest.fixture(scope='session')
def airline_facade_object():
    an_facade = AnonymusFacade(repo, config)
    return an_facade.login('m4x1m', '2themax')

@pytest.fixture(scope='function', autouse=True)
def airline_facade_clean():
    repo.reset_db()

def test_get_flights_by_airline(airline_facade_parameter):
    assert airline_facade_parameter.get_flights_by_airline(2) == repo.get_by_id(Flights, Flights.airline_company_id, 2)


def test_update_airline(airline_facade_parameter):
    airline_update = {'name':'Up Yours LTD'}
    airline_facade_parameter.update_airline(airline_update, 2)
    check_airline = repo.get_by_id(Airline_Companies, 2)
    assert check_airline.name == 'insert Yours LTD'
