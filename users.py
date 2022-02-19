from sqlalchemy import  BigInteger,  Column,  Text, ForeignKey
from sqlalchemy.orm import backref,relationship
from db_config import Base

class Users(Base):
    __tablename__ = 'users'

    id = Column(BigInteger(),primary_key=True,autoincrement=True)
    username = Column(Text(),nullable=False, unique = True)
    password = Column(Text(),nullable=False)
    email = Column(Text(),nullable=False,unique=True)
    user_role = Column(BigInteger(),ForeignKey('user_roles.id'), unique = False ,nullable=False)

    user_roles = relationship('User_Roles', backref=backref('users', uselist=False, passive_deletes=True))

    def __repr__(self):
        return f'<Users id = {self.id} user name = {self.username} password = {self.password} email = {self.email} user role = {self.user_role}>'

    def __str__(self):
        return f'<Users id={self.id}  user name={self.username} password={self.password} email={self.email} user role={self.user_role}>'
