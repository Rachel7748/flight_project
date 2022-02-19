class AdministratorNotFound(Exception):
    def __int__(self, message='administrator user not found'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'AdministratorNotFound:{self.message}'
