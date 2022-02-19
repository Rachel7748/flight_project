class UserAlreadyExist(Exception):
    def __int__(self, message = 'this usename already taken'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'UserAlreadyExist:{self.message}'
