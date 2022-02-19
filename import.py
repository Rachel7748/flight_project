from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from db_config import local_session, create_all_entities

connecting_string = 'postgresql+psycopg2://postgres:admin@localhost/rachel_project'

Base = declarative_base()
def create_all_entities():
     Base.metadata.create_all(engine)

Session = sessionmaker()
engine = create_engine(connecting_string, echo = True)
local_session = Session(bind = engine)
