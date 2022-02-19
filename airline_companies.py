from sqlalchemy import  BigInteger,  Column, Text, ForeignKey
from sqlalchemy.orm import relationship, backref
from db_config import Base

class Airline_Companies(Base):
    __tablename__ = 'airline_companies'

    id = Column(BigInteger(),primary_key=True,autoincrement=True)
    name = Column(Text(),nullable=False, unique=True)
    country_id = Column(BigInteger(), ForeignKey('countries.id',ondelete= 'CASCADE'), nullable=False)
    user_id = Column(BigInteger(), ForeignKey('users.id',ondelete='CASCADE'), unique = True)

    countries = relationship('Countries',backref=backref('airline_companies'),uselist=True, passive_deletes = True)
    user = relationship('Users', backref=backref('airline_companies', uselist=False, passive_deletes=True))

    def __repr__(self):
        return f'< Airline_companies id = {self.id} name = {self.name} >'

    def __str__(self):
        return f'<Airline_companies id={self.id} name={self.name} >'
