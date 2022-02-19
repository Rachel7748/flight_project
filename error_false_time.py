class FalseTime(Exception):
    def __int__(self, message='wrong landing time, cant be before departure'):
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return f'FalseTime:{self.message}'
