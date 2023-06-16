# /backend/app.py
import os

from flask import Flask
from dotenv import load_dotenv
from routes import gpt_routes, dalle_routes

# Load environment variables
load_dotenv()

# Initialize Flask application
app = Flask(__name__)

# Set configuration
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['OPENAI_API_KEY'] = os.getenv('OPENAI_API_KEY')
app.config['DALLE_API_KEY'] = os.getenv('DALLE_API_KEY')

# Register blueprints
app.register_blueprint(gpt_routes.bp)
app.register_blueprint(dalle_routes.bp)

if __name__ == "__main__":
    app.run(debug=True)  # set debug mode