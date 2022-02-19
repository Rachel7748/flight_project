class PasswordTooShort(Exception):
    def __int__(self, message = 'password must have at least 6 characters'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'PasswordTooShort:{self.message}'
