import os
from app import create_app

environment = os.getenv('ENV')
connexion_app = create_app()
app = connexion_app.app


if __name__ == '__main__':
    app.run(port=9999, debug=(environment == 'local'))
