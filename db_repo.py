from sqlalchemy import asc
from countries import Countries
from users import Users
from customers import Customers
from administrators import Administrators
from tickets import Tickets
from user_roles import User_Roles
from fligts import Flights
from airline_companies import Airline_Companies

class DBrepo:
    def __init__(self,local_session):
        self.local_session = local_session

    def reset_autoincrement(self, table_class):
            self.local_session.execute(f'TRUNCATE TABLE {table_class.__tablename__} RESTART IDENTITY CASCADE')

    def get_all (self,table_class):
        return self.local_session.query(table_class).all()

    def get_all_order_by(self,table_class, column_name, direction=asc):
        return self.local_session.query(table_class).order_by (direction(column_name)).all()

    def get_by_id(self,table_class,id):
        return self.local_session.query(table_class).get(id)

    def get_by_condition(self, table_class, condition):
        return self.local_session.query(table_class).filter(condition)

    def get_by_ilike(self, table_class, column_name, exp):
        return self.local_session.query(table_class).filter(column_name.ilike(exp)).all()

    def add(self,one_row):
        self.local_session.add(one_row)
        self.local_session.commit()

    def add_all(self,rows_list):
        self.local_session.add_all(rows_list)
        self.local_session.commit()

    def delete_by_id(self, table_class, id_column, id):
        self.local_session.query(table_class).filter(id_column == id).delete(synchronize_session=False)
        self.local_session.commit()

    def delete_table(self, table_class):
        self.local_session.execute(f'drop TABLE if exists {table_class} cascade')
        self.local_session.commit()

    def delete_all_tables(self):
        self.delete_table('countries')
        self.delete_table('users')
        self.delete_table('customers')
        self.delete_table('administrators')
        self.delete_table('tickets')
        self.delete_table('user_roles')
        self.delete_table('flights')
        self.delete_table('airline_companies')


    def update_by_id(self,table_class, id_column, id, data):
        self.local_session.query(table_class).filter(id_column == id).update(data,'updated')
        self.local_session.commit()

    def repo_insert_first(self):

        self.reset_autoincrement(Countries)
        self.reset_autoincrement(Administrators)
        self.reset_autoincrement(Flights)
        self.reset_autoincrement(Users)
        self.reset_autoincrement(User_Roles)
        self.reset_autoincrement(Customers)
        self.reset_autoincrement(Airline_Companies)
        self.reset_autoincrement(Tickets)

