import logger
from db_repo import DBrepo
from db_config import local_session, create_all_entities, config
from datetime import datetime
from countries import Countries
from users import Users
from customers import Customers
from administrators import Administrators
from tickets import Tickets
from user_roles import User_Roles
from fligts import Flights
from airline_companies import Airline_Companies
from facade_anonymus import AnonymusFacade




repo =DBrepo(local_session)
repo.delete_all_tables()
create_all_entities()
#repo.repo_insert_first()


anonymus_facade = AnonymusFacade(repo)
admin_facade = anonymus_facade.login('adi', 'ad196')
airline_facade = anonymus_facade.login('elal', 'el46')
customer_facade = anonymus_facade.login('merav', 'mer49')





 #insert
repo.add_all([Countries(name = 'israel'), Countries(name = 'turkey'), Countries(name = 'usa')])
repo.add_all([User_Roles(user_role = 'administrator'), User_Roles(user_role = 'airline'),User_Roles(user_role = 'customer')])
repo.add_all([Users(username = 'merav', password = 'mer49', email = 'merav85@gmail.com', user_role = 3),
             Users(username = 'liron', password = 'lir04', email = 'liron55@walla.com', user_role = 3),
            Users(username = 'elal',password = 'el46', email = 'elalil@gmail.com', user_role = 2),
            Users(username = 'jetblue',password = 'je7258', email = 'jetblue78@gmail.com', user_role = 2),
            Users(username = 'adi',password = 'ad196', email = 'adior@gmail.com', user_role = 1),
            Users(username = 'michal',password = 'mic47', email = 'mical65@walla.com', user_role = 1)])
repo.add_all([Customers(first_name = 'merav',last_name = 'lavi',address = 'bet zayit', phone_number = '0528963251' , credit_card_number = 840005236925 ,user_id = 1),
              Customers(first_name = 'liron',last_name = 'tamir',address = 'givatayim', phone_number = '0542671589', credit_card_number = 8400067154363 ,user_id = 2)])
repo.add_all([Administrators(first_name = 'adi',last_name = 'oren', user_id = 5), Administrators(first_name = 'michal',last_name = 'shemesh', user_id = 6)])
repo.add_all([Airline_Companies(name = 'elal', country_id = 1, user_id = 3),Airline_Companies(name = 'jetblue',country_id = 3,user_id = 4)])
repo.add_all([Flights(airline_company_id = 1, origin_country_id = 1,destination_country_id = 2,departure_time =datetime(2022, 4, 6, 6, 15, 25),landing_time = datetime(2022, 4, 6, 7, 35, 10), remaining_tickets = 115),
              Flights(airline_company_id = 2, origin_country_id = 1,destination_country_id = 3,departure_time =datetime(2022, 9, 16, 23, 30, 7),landing_time =datetime(2022, 9, 17, 12, 5, 5) , remaining_tickets = 85)])
repo.add_all([Tickets(flight_id = 1, customer_id = 1),Tickets(flight_id = 2, customer_id = 2)])



