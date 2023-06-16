# /backend/routes/dalle_routes.py

from flask import Blueprint, request, jsonify
from dalle_api import generate_image

bp = Blueprint('dalle', __name__, url_prefix='/api/dalle')

@bp.route('/generate-image', methods=['POST'])
def post_image():
    data = request.get_json()
    prompt = data.get('prompt')

    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400

    image = generate_image(prompt)
    if not image:
        return jsonify({'error': 'Could not generate image'}), 500

    return jsonify({'image': image})

@bp.route('/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello, World!'}), 200
