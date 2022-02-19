class FlightNotFound(Exception):
    def __int__(self, message='flight not found'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'FlightNotFound:{self.message}'
