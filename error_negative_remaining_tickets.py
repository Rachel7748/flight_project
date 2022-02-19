class NegativeRemainingTickets(Exception):
    def __int__(self, message = 'tickets are over'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'NegativeRemainingTickets:{self.message}'
