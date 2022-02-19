class IncorrectUserId:
    def __int__(self, message = 'incorrect id!, please put the correct user role'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'IncorrectUserId:{self.message}'
