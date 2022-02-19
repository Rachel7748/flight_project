class AirlineNotFound(Exception):
    def __int__(self, message='airline not found'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'AirlineNotFound:{self.message}'
