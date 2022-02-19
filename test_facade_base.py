import pytest
from countries import Countries
from db_config import local_session, config
from db_repo import Dbrepo
from facade_anonymus import AnonymusFacade
from airline_companies import Airline_Companies
from fligts import Flights

repo = Dbrepo(local_session)
anonnymus_facade = AnonymusFacade(repo, config)

@pytest.fixture(scope='session')
def base_facade_parameter():
    an_facade = anonnymus_facade
    return an_facade

@pytest.fixture(scope='function', autouse=True)
def anonymus_facade_delete():
    repo.reset_db()

def test_get_all_countries(base_facade_parameter):
    assert base_facade_parameter.get_all_countries() == repo. get_all(Countries)

def test_get_flight_by_id(base_facade_parameter):
    assert base_facade_parameter.get_flight_by_id(1) == repo.get_by_id(Flights,1)
