# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from gpt_api import generate_recipe
from dalle_api import generate_image

# Initialize Flask application
app = Flask(__name__)
CORS(app)

@app.route('/api/gpt/generate-recipe', methods=['POST'])
def post_recipe():
    data = request.get_json()
    prompt = data.get('prompt')

    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400

    recipe = generate_recipe(prompt)
    if not recipe:
        return jsonify({'error': 'Could not generate recipe'}), 500

    return jsonify({'recipe': recipe})

@app.route('/api/dalle/generate-image', methods=['POST'])
def post_image():
    data = request.get_json()
    prompt = data.get('prompt')

    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400

    image = generate_image(prompt)
    if not image:
        return jsonify({'error': 'Could not generate image'}), 500

    return jsonify({'image': image})

@app.route('/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello, World!'}), 200

if __name__ == "__main__":
    app.run(debug=True)  # set debug mode