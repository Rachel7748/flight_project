class WrongInput(Exception):
    def __int__(self, message = 'input must be an integer'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'WrongInput:{self.message}'
