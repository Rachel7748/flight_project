import pytest
from facade_anonymus import AnonymusFacade
from error_administrator_not_found import AdministratorNotFound
from error_wrong_input import WrongInput
from administrators import Administrators
from users import Users
from db_repo import DBrepo
from db_config import local_session, config

repo = DBrepo(local_session)

@pytest.fixture(scope='session')
def admin_facade_parameter():
    ann_facade = AnonymusFacade(repo, config)
    return ann_facade.login('adi','ad196')

@pytest.fixture(scope='function', autouse=True)
def admin_facade_delete():
    repo.reset_db()



def test_add_administrator(admin_facade_parameter):
    expected_admin = Administrators(first_name='adi', last_name='oren', user_id=5)
    expected_user = Users(username='adi', password='ad196', email='adior@gmail.com', user_role=1)
    admin_facade_parameter.add_administrator(expected_admin, expected_user)
    check_admin = repo.get_by_id(Administrators, 5)
    check_user = repo.get_by_id(Users, 7)
    assert check_admin == expected_admin
    assert check_user == expected_user

def test_remove_administrator(admin_facade_parameter):
    admin_facade_parameter.remove_administrator(1)
    assert repo.get_by_id(Administrators, 5) == None
    assert repo.get_by_id(Users, 3) == None
