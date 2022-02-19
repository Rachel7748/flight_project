class UserNotFound(Exception):
    def __int__(self, message='username not found'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'UsernameNotFound:{self.message}'
