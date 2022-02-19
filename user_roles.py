from sqlalchemy import BigInteger, Column, Text
from db_config import Base

class User_Roles(Base):
    __tablename__ = 'user_roles'

    id = Column(BigInteger(),primary_key=True,autoincrement=True)
    user_role = Column(Text(),nullable=False, unique= True)

def __repr__(self):
    return f'<User_roles id = {self.id} role name = {self.user_role}>'

def __str__(self):
    return f'<User_roles id={self.id} role name={self.user_role}>'
