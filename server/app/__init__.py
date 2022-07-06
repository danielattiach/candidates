import connexion


def create_app():
    # Creating Flask app
    connexion_app = connexion.FlaskApp(__name__, specification_dir='.')
    app = connexion_app.app

    # register endpoints
    connexion_app.add_api('../app.yaml', base_path='/api')

    return connexion_app
