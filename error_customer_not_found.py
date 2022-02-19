class CustomerNotFound(Exception):
    def __int__(self, message='customer not found'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'CustomerNotFound:{self.message}'
