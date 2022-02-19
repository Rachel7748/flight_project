class TicketNotFound(Exception):
    def __int__(self, message='ticket not found'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'TicketNotFound:{self.message}'
