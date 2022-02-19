from sqlalchemy import  BigInteger,  Column,ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship, backref
from db_config import Base

class Tickets(Base):
    __tablename__ = 'tickets'

    id = Column(BigInteger(),primary_key=True, autoincrement=True)
    flight_id = Column(BigInteger(), ForeignKey ('flights.id'), unique = True)
    customer_id = Column(BigInteger() ,ForeignKey ('customers.id'),nullable=False, unique = True)

    flights = relationship('Flights', backref = backref ('tickets', uselist = True, passive_deletes=True))
    customers = relationship('Customers', backref = backref ('tickets', uselist = True,passive_deletes=True))

    #__table_args__ = (UniqueConstraint('flight_id','customer_id', name = 'except'))


    def __repr__(self):
        return f'<Tckets id = {self.id} flight id = {self.flight_id} customer name = {self.customer_id}>'

    def __str__(self):
        return f'<Tickets id={self.id} flight id={self.flight_id} customer name={self.customer_id}>'
