class FalseLocation(Exception):
    def __int__(self, message='departure and landing cant be the same destination'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'FalseLocation:{self.message}'
