from sqlalchemy import  BigInteger,  Column, ForeignKey,DateTime

from sqlalchemy.orm import relationship, backref
from db_config import Base

class Flights(Base):
    __tablename__ = 'flights'

    id = Column(BigInteger(),primary_key=True,autoincrement=True)
    airline_company_id = Column(BigInteger(),ForeignKey ('airline_companies.id',ondelete= 'CASCADE',),nullable=False,unique=False)
    origin_country_id = Column(BigInteger(),ForeignKey ('countries.id',ondelete= 'CASCADE'),nullable=False,unique=False)
    destination_country_id = Column(BigInteger(),ForeignKey ('countries.id',ondelete= 'CASCADE'),nullable=False,unique=False)
    departure_time = Column(DateTime,unique=False,nullable=False)
    landing_time = Column(DateTime,unique=False,nullable=False)
    remaining_tickets = Column(BigInteger())

    origin = relationship('Countries',foreign_keys = [origin_country_id],uselist=True, passive_deletes=True)
    destination = relationship('Countries',foreign_keys = [destination_country_id],uselist=True, passive_deletes=True)
    flights = relationship('Airline_Companies',backref=backref('flights',uselist=True, passive_deletes=True))


    def __repr__(self):
        return f'<Flights id = {self.id} airline company id = {self.airline_company_id} origin country id = {self.origin_country_id} destination country id = {self.destination_country_id} departure time = {self.departure_time} landing time = {self.landing_time} remaining tickets = {self.remaining_tickets}>'

    def __str__(self):
        return f'<Flights id={self.id} airline company id={self.airline_company_id} origin country id={self.origin_country_id} destination country id={self.destination_country_id} departure time={self.departure_time} landing time={self.landing_time} remaining tickets={self.remaining_tickets}>'
