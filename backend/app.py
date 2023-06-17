from flask import Flask
from flask_cors import CORS
from routes import gpt_routes, dalle_routes


# Initialize Flask application
app = Flask(__name__)
CORS(app)


# Register blueprints
app.register_blueprint(gpt_routes.bp)
app.register_blueprint(dalle_routes.bp)

if __name__ == "__main__":
    app.run(debug=True)  # set debug mode