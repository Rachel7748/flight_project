from facade_base import FacadeBase
from logger import Logger
from login_token import Token
from users import Users
from administrators import Administrators
from airline_companies import Airline_Companies
import error_user_not_found



class AnonymusFacade(FacadeBase):
    def __init__(self, repo):
        super.__init__(repo)
        self._logger = Logger.get_instance()
        self._token = Token

    def login(self,username, password):
        return self.repo(username)(password)

    def create_user(self,user):
        return self.repo.add(user)

    def create_all_users(self,user):
        self.repo.add_all(user)

    def __str__(self):
        return f'{super().__init__}'

    def __int__(self, repo,logger,token):
        super().__init__(repo)
        self._logger = Logger.get_instance()
        self._token = Token

    def log_in(self, username, password):
        self._logger._logger.debug('Attempting logging in')
        if not  isinstance(username,str):
            self._logger._logger.error('username must be string only')
        elif not isinstance(password,str):
            self._logger._logger.error('username must be string only')
        user = self.repo.get_by_condition(Users, lambda query: query.filter(Users.username == username).all())
        if not user:
            self._logger._logger.error(f'The User {username} was not found')
            raise error_user_not_found
        elif user[0].password != password:
            self._logger._logger.error('incorrect password')
        else:
            if user[0].user_role == 1:
                self._logger._logger.info(f'WELCOME, ADMIN{user[0].username}')
                return Token(id = user[0].administrators.user_id,name = user[0].administrators.first_name,role = 'Administrators')
            elif user[0].user_role == 2:
                self._logger._logger.info(f'WELCOME, AIRLINE{user[0].username}')
                return Token(id=user[0].airline_companies.user_id, name=user[0].airline_companies.name, role='Airlines')
            elif user[0].user_role == 3:
                self._logger._logger.info(f'WELCOME, CUSTOMER{user[0].username}')
                return Token(id=user[0].customers.user_id, name=user[0].customers.first_name, role='Customers')

    def __str__(self):
        return f'{super().__init__()}'








